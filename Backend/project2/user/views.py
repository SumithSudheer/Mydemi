from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import User
from rest_framework.views import APIView
from django.contrib.auth import authenticate, login, logout
from rest_framework import status
import jwt
from .google import verify_google
import requests
import json
from django.http import HttpResponse
# from

# Create your views here.

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['name'] = user.name
        token['email'] = user.email
        # token['phone'] = user.phone
        token['active'] = user.active
        token['staff'] = user.staff
        token['superuser'] = user.superuser

        # ...

        return token


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['GET'])
def index(request):
    print(jwt.decode(
        request.COOKIES['auth'], 'django-insecure-k_hjmkm0-kap2bp6z9=n3_1o$12sx%upmwqc5ga3ap+=cb1r_&', algorithms=["HS256"]))
    token = request.META.get('HTTP_AUTHORIZATION', " ")
    print(token)
    if request.user.is_authenticated:
        return Response({"message": "hello World"})
    else:
        return Response({"message": "hello"})


@api_view(['POST'])
def login_user(request):

    print(request)
    user = authenticate(
        username=request.data['username'], password=request.data['password'])
    if user is not None:
        login(request, user)

    return Response({"mess": "done"})


@api_view(['POST'])
def register_user(request):
    try:
        User.objects.create_user(
            email=request.data['email'], password=request.data['password'], phone=request.data['phone'], name=request.data['name'])
    except:
        return Response({"message": "Something went wrong"}, status=status.HTTP_406_NOT_ACCEPTABLE)
    else:
        return Response({"message": "Success"})


@api_view(['POST'])
def google_signup(request):
    token = verify_google(request.data['token'])
    print(token)
    # uk = {"email": token['email'], "password": token['given_name']}
    # data = json.dumps(uk)
    url='http://127.0.0.1:8000/api/token/'
    body={
    "email":token['email'],
    "password":token['given_name']
    }
    print(body)

    try:
        print('kkkkkkkkkkkkkkkkkkkkkkkkkkkk')
        user = User.objects.get(email=token['email'])
        print(user)
        print('lllllllllllllllllllllllll')
    except:
        user = User.objects.create_user(
            email=token['email'], password=token['given_name'], name=token['given_name'])
        
        user.save()
        x= requests.post(url, json=body)
        print(x._content)
        d=x._content
        my_json = d.decode('utf8').replace("'", '"')
        j = json.loads(my_json)

        return Response({"status": "user created","data":j})

    else:
        x= requests.post(url, json=body)
        d=x._content
        my_json = d.decode('utf8').replace("'", '"')
        j = json.loads(my_json)
        return Response({"status": "user already existed","data":j})

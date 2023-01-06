from django.shortcuts import render
from tutor.models import Video_approve
from tutor.serializer import Video_approveSerializers
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.authentication import JWTAuthentication

# Create your views here.


class Video_approve_class(APIView):
    authentication_classes = [JWTAuthentication]

    def get(self, request):
        try:
            approve = Video_approve.objects.filter()
            print(approve)
            serial = Video_approveSerializers(approve, many=True)
            print(serial)
            return Response({"message": "aproves needed","data":serial.data})
        except Exception as e:
            print(e)
            return Response({"message": "No approves","data":[]})
            



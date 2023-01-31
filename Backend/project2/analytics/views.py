from django.shortcuts import render
from .serializers import ViewsSerializer, LikeSerializer, CommentsSerializer, DisLikeSerializer
from rest_framework.views import APIView
from .models import Views, Like, Comments, Dislike
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import mixins

# Create your views here.


class Views_c(APIView):

    def get(self, request, id):
        vi = Views.objects.filter(id=id)
        s = ViewsSerializer(vi, many=True)
        return Response({"message": "aproves needed", "data": s.data})


class Likes_c(generics.ListCreateAPIView, mixins.CreateModelMixin, mixins.DestroyModelMixin):
    queryset = Like.objects.all()
    serializer_class = LikeSerializer

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        for k in kwargs:
            if k == 'pk':
                queryset  = Like.objects.filter(video=kwargs[k])

        serializer = LikeSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)



class Dislikes_c(generics.ListCreateAPIView, mixins.CreateModelMixin, mixins.DestroyModelMixin):
    queryset = Dislike.objects.all()
    serializer_class = DisLikeSerializer

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        for k in kwargs:
            if k == 'pk':
                queryset  = Dislike.objects.filter(video=kwargs[k])

        serializer = DisLikeSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)



class Comments_c(generics.ListCreateAPIView, mixins.CreateModelMixin, mixins.DestroyModelMixin):
    queryset = Comments.objects.all()
    serializer_class = CommentsSerializer

    def get(self, request, *args, **kwargs):
        if 'pk' in kwargs:
            print('llllllllllllllllllllllllllll')
            queryset = Comments.objects.filter(video = kwargs['pk'])
            serializer = CommentsSerializer(queryset, many=True)
            return Response(serializer.data)
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)


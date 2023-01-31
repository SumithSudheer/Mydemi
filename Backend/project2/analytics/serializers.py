from rest_framework import serializers
from .models import Views, Comments, Rateing, Like, Dislike
# from tutor.serializer import VideoSerializers

class ViewsSerializer(serializers.ModelSerializer):
    # views = VideoSerializers( read_only=True)
    class Meta:
        model = Views
        fields = '__all__'



class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Like
        fields = '__all__'


class DisLikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dislike
        fields = '__all__'

class CommentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = '__all__'





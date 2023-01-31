from rest_framework import serializers
from .models import Course, Section, Video, Video_approve
from rest_framework.pagination import PageNumberPagination
# from analytics.serializers import ViewsSerializer
from user.serializer import UserSerializers
from analytics.serializers import ViewsSerializer, LikeSerializer, DisLikeSerializer


class CourseSerializers(serializers.ModelSerializer):
    staff_course = serializers.SlugRelatedField(
        many=True, 
    read_only=True,
    slug_field="name"
    )
    class Meta:
        model = Course
        fields = '__all__'


class SectionSerializers(serializers.ModelSerializer):
    class Meta:
        model = Section
        fields = '__all__'


class Video_approveSerializers(serializers.ModelSerializer):
    
    class Meta:
        model = Video_approve
        fields = '__all__'


class VideoSerializers(serializers.ModelSerializer):
    video_views = ViewsSerializer(many=True, read_only=True)
    video_likes = LikeSerializer(many=True, read_only=True)
    video_dislikes = DisLikeSerializer(many=True, read_only=True)



    class Meta:
        model = Video
        fields = '__all__'


class LargeResultsSetPagination(PageNumberPagination):
    page_size = 1000
    page_size_query_param = 'page_size'
    max_page_size = 10000


class StandardResultsSetPagination(PageNumberPagination):
    page_size = 1
    page_size_query_param = 'page_size'
    max_page_size = 20
    page_query_param = 'p'

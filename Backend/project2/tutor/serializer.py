from rest_framework import serializers
from .models import Course, Section, Video, Video_approve
from rest_framework.pagination import PageNumberPagination
from user.models import User


class CourseSerializers(serializers.ModelSerializer):
    # staff = serializers.PrimaryKeyRelatedField(queryset=User.objects.all() ,many=False)
    # staff = serializers.StringRelatedField(many=True)

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
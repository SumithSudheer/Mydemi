from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework import status
from .models import Course, Section, Video
from user.models import User
from user.validate import is_auth_staff
from .serializer import CourseSerializers, SectionSerializers, VideoSerializers, StandardResultsSetPagination
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.decorators import api_view

# Create your views here.


@api_view(['DELETE'])
def delete_video(request, pk, format=None):
    video = Video.objects.filter(id=pk)
    video.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)


class Course_md(APIView):

    authentication_classes = [JWTAuthentication]
    # pagination_class = StandardResultsSetPagination
    # permission_classes = [ IsAuthenticated ]

    def post(self, request):
        if is_auth_staff(request):
            try:
                st = User.objects.get(id=request.data['user']['user_id'])
            except:
                return Response({"message": "User cant be found"})
            try:
                course = Course(
                    name=request.data['name'], description=request.data['description'], staff=st)
                course.save()
            except:
                return Response({"message": "Couldnt save the details"})
            return Response({"message": "Course was added"})
        else:
            return Response({"message": "Course was not added"})

    def get(self, request):

        print(request.user)
        print(request.headers)
        if is_auth_staff(request):
            print('yes')
        course = Course.objects.filter(staff=request.GET['pk'])
        count = Course.objects.filter(staff=request.GET['pk']).count()
        print(count)
        try:
            if request.GET['limit']:
                print('lllllllllllllllllllllllkjxkskxmksmxksmxkmksx')
                paginator = LimitOffsetPagination()
                result = paginator.paginate_queryset(course, request)
                print(course)
                serial = CourseSerializers(result, many=True)
                # serial = StandardResultsSetPagination(serial.data)
                print(serial)
                return Response({"message": "helloget", "count": count, "data": serial.data})
        except:
            serial = CourseSerializers(course, many=True)
            return Response({"message": "helloget", "data": serial.data})


class Section_md(APIView):
    authentication_classes = [JWTAuthentication]
    # permission_classes = [IsAuthenticated]

    def post(self, request):
        st = User.objects.get(id=request.data['user']['user_id'])
        cs = Course.objects.get(id=request.data['course'])
        print(request.data)
        section = Section(name=request.data['section'], course=cs)
        section.save()
        return Response({"message": "Couldnt save the details"})

    def get(self, request):
        print(request.user)
        print('llllllllllllllllllllllllllll')
        print(request.GET['pk'])
        cor = Course.objects.get(id=request.GET['pk'])
        section = Section.objects.filter(course=cor)
        print(section)
        serial = SectionSerializers(section, many=True)
        return Response({"message": "done", "data": serial.data, "status": 200})


class Video_md(APIView):
    authentication_classes = [JWTAuthentication]
    # permission_classes = [IsAuthenticated]

    def post(self, request):
        print(request.data)
        # st = User.objects.get(id=request.data['user']['user_id'])
        cs = Course.objects.get(id=request.data['course'])
        section = Section.objects.get(id=request.data['section'])
        name = request.data['name']
        vid = request.data['video']
        description = request.data['description']
        if vid == '':
            return Response({"message": "error"})
        video = Video(name=name, description=description,
                      section=section, course=cs, video=vid)
        video.save()
        print(request.data)
        return Response({"message": "done"})

    def get(self, request):

        print(request.user)
        video = Video.objects.filter(section=request.GET['s'])
        serial = VideoSerializers(video, many=True)

        return Response({'data': serial.data})

    def patch(self, request, pk, format=None):
        video = Video.objects.get(id=pk)
        print(video)
        print(request.data)
        serial = VideoSerializers(video, data=request.data, partial=True)
        print(serial)
        if serial.is_valid():
            print('yes')
            serial.save()
            return Response(serial.data)
        return Response(serial.error, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PATCH'])
def staf_register(request,id):
    try:
        user = User.objects.filter(id=id).update(staff=True)
        print(user)
    except Exception as e:
        return Response({"message":e})
    else:
        return Response({"message":"success"})


    


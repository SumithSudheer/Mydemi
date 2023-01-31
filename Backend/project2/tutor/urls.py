from django.urls import path
from . import views

urlpatterns = [
    path('course/', views.Course_md.as_view(), name='course'),
    # path('course/<id>/', views.Course_md.as_view(), name='course'),

    path('section/', views.Section_md.as_view(), name='section'),
    path('video/', views.Video_md.as_view(), name='video'),
    path('video/<pk>/', views.Video_md.as_view(), name='video'),
    path('delete_video/<pk>/', views.delete_video, name='delete_video'),
    path('register/<id>/',views.staf_register, name='staff_register'),
    # path('courseadd/', views.CourseAdd, name='course'),



]

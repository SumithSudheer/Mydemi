from django.urls import path
from . import views

urlpatterns = [
    path('approve/', views.Video_approve_class.as_view(), name='course'),
 
]
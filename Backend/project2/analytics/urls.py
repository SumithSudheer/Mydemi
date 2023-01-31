from django.urls import path
from . import views

urlpatterns = [
    path('views/<id>/',views.Views_c.as_view(), name='views'),
    path('like', views.Likes_c.as_view(), name='like'),
    path('like/<int:pk>/', views.Likes_c.as_view(), name='like'),
    path('dislike', views.Dislikes_c.as_view(), name='dislike'),
    path('dislike/<int:pk>/', views.Dislikes_c.as_view(), name='dislike'),
    path('comments/', views.Comments_c.as_view(), name='comments'),
    path('comments/<int:pk>/', views.Comments_c.as_view(), name='comments'),


 
 
]
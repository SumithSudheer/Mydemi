from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('token/',views.MyTokenObtainPairView.as_view(), name='token'),
    path('refresh', TokenRefreshView.as_view(), name='refresh'),
    path('index/', views.index, name='index'),
    path('login/', views.login_user, name='login'),
    path('signup/', views.register_user, name='signup'),
    path('google_login/', views.google_signup, name='google_login'),
    

]

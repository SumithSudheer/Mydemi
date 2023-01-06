from django.db import models
from django.contrib.auth.models import AbstractBaseUser ,BaseUserManager

# Create your models here.


class UserManager(BaseUserManager):

    def create_user(self, email, password, name, is_active=True, is_superuser=False, is_staff=False,phone=None):
        if not email:
            raise ValueError('Email is must')
        user_obj = self.model(email=self.normalize_email(email))
        user_obj.phone=phone
        user_obj.name=name
        user_obj.staff = is_staff
        user_obj.active = is_active
        user_obj.admin = is_superuser
        user_obj.set_password(password)
        user_obj.save(using=self._db)
        return user_obj

    def create_staff(self, email, password, is_active=True, is_superuser=False, is_staff=True ):
        if not email:
            raise ValueError('email is must')
        user = self.create_user(email, password=password, is_staff=True)
        return user

    def create_superuser(self, email, password):
        if not email:
            raise ValueError("Email is must")
        user = self.create_user(email, password=password, is_staff=True, is_superuser=True)
        return user



class User(AbstractBaseUser):
    name=models.CharField(max_length=200)
    email=models.CharField(max_length=250,unique=True)
    phone=models.CharField(max_length=250,unique=True, null=True)
    active=models.BooleanField(default=True)
    staff=models.BooleanField(default=False)
    superuser=models.BooleanField(default=False)
    datejoined=models.TimeField(auto_now_add=True)

    USERNAME_FIELD = 'email'

    REQUIRED_FIELDS = []

    objects= UserManager()

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    @property
    def is_staff(self):
        return self.staff

    
    @property
    def is_active(self):
        return self.active

    
    @property
    def is_superuser(self):
        return self.superuser



from django.db import models
from user.models import User
from django.db.models.signals import pre_save, post_save
from django.dispatch import receiver

# Create your models here.


class Course(models.Model):
    name = models.CharField(max_length=250, unique=True)
    description = models.TextField(max_length=500)
    staff = models.ForeignKey(User, on_delete=models.CASCADE)


class Section(models.Model):
    name = models.CharField(max_length=200)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    order = models.DateTimeField(auto_now_add=True)


class Video(models.Model):
    name = models.CharField(max_length=250)
    description = models.TextField(max_length=500)
    section = models.ForeignKey(Section, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    video = models.TextField()
    active = models.BooleanField(default=False)

    def __str__(self) -> str:
        return self.name


class Video_approve(models.Model):
    video = models.ForeignKey(
        Video, on_delete=models.CASCADE, unique=True)
    content = models.TextField(default=None)

    def __str__(self) -> str:
        return self.video.name


@receiver(post_save, sender=Video)
def task_handler(sender, instance, **kwargs):
    if instance.active:
        d = Video_approve.objects.filter(video=instance).delete()


@receiver(post_save, sender=Video)
def task_handle(sender, instance, **kwargs):
    if not instance.active:
        Video_approve.objects.create(video=instance, content = instance.video)

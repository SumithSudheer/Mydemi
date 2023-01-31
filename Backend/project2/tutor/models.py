from django.db import models
from user.models import User
from django.db.models.signals import pre_save, post_save
from django.dispatch import receiver
# from analytics.models  import Views

# Create your models here.

class Category(models.Model):
    name = models.TextField(max_length=250)


class Course(models.Model):
    name = models.CharField(max_length=250, unique=True)
    description = models.TextField(max_length=500)
    staff = models.ForeignKey(User, on_delete=models.CASCADE, related_name='staff_course')
    category = models.ForeignKey(Category, on_delete=models.CASCADE , related_name='category_course')
    price = models.DecimalField(decimal_places=2, max_digits=15)
    thumbnails =models.ImageField(upload_to='image/', default='https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220401124017/HTML-Tutorial.png' )
    # views = models.ForeignKey(Views, on_delete=models.CASCADE)


class Section(models.Model):
    name = models.CharField(max_length=200)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='user')
    order = models.DateTimeField(auto_now_add=True)


class Video(models.Model):
    name = models.CharField(max_length=250)
    description = models.TextField(max_length=500)
    section = models.ForeignKey(Section, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    video = models.TextField()
    active = models.BooleanField(default=False)
    # views = models.ForeignKey(analytics.models.Views)
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

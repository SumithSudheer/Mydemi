from django.db import models
from tutor.models import Video
from user.models import User
from django.db.models.signals import pre_save, post_save
from django.dispatch import receiver
import datetime

# Create your models here.


class Views(models.Model):
    view = models.IntegerField(default=1)
    video = models.ForeignKey(Video, on_delete=models.CASCADE, related_name='video_views')
    # user = models.ForeignKey(User, on_delete=models.PROTECT)


class Like(models.Model):
    # like = models.BooleanField(default=False)
    video = models.ForeignKey(Video, on_delete=models.CASCADE, related_name="video_likes")
    user = models.ForeignKey(User, on_delete=models.PROTECT)

class Dislike(models.Model):
    # like = models.BooleanField(default=False)
    video = models.ForeignKey(Video, on_delete=models.CASCADE, related_name="video_dislikes")
    user = models.ForeignKey(User, on_delete=models.PROTECT)


class Comments(models.Model):
    comment = models.TextField()
    video = models.ForeignKey(Video, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.PROTECT)
    date = models.DateField(auto_now_add=True)

class Rateing(models.Model):
    rate = models.IntegerField()
    video = models.ForeignKey(Video, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.PROTECT)    

    

@receiver(post_save, sender=Like)
def like_manager(sender, instance, **kwargs):
    try:
        dis = Dislike.objects.filter(user=instance.user, video=instance.video).delete()
    except:
        pass

@receiver(post_save, sender=Dislike)
def dislike_manager(sender, instance, **kwargs):
    try:
        dis = Like.objects.filter(user=instance.user, video=instance.video).delete()
    except  Exception as e:
        print(e)
        pass
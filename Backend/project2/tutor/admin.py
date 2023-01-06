from django.contrib import admin
from .models import Course, Video, Video_approve
# Register your models here.


class CourseAdmin(admin.ModelAdmin):
    pass


class VideoAdmin(admin.ModelAdmin):
    pass


class Video_approveAdmin(admin.ModelAdmin):
    pass


admin.site.register(Course, CourseAdmin)
admin.site.register(Video_approve, Video_approveAdmin)

admin.site.register(Video, VideoAdmin)

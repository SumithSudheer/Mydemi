# Generated by Django 4.1.4 on 2023-01-08 17:31

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField(max_length=250)),
            ],
        ),
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=250, unique=True)),
                ('description', models.TextField(max_length=500)),
                ('price', models.DecimalField(decimal_places=2, max_digits=15)),
                ('thumbnail', models.ImageField(default='https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220401124017/HTML-Tutorial.png', upload_to='image/')),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='category_course', to=settings.AUTH_USER_MODEL)),
                ('staff', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='staff_course', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Section',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('order', models.DateTimeField(auto_now_add=True)),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tutor.course')),
            ],
        ),
        migrations.CreateModel(
            name='Video',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=250)),
                ('description', models.TextField(max_length=500)),
                ('video', models.TextField()),
                ('active', models.BooleanField(default=False)),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tutor.course')),
                ('section', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tutor.section')),
            ],
        ),
        migrations.CreateModel(
            name='Video_approve',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.TextField(default=None)),
                ('video', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tutor.video', unique=True)),
            ],
        ),
    ]

# Generated by Django 4.1.4 on 2022-12-20 15:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tutor', '0002_section_order'),
    ]

    operations = [
        migrations.AddField(
            model_name='video',
            name='video',
            field=models.TextField(null=True, unique=True),
        ),
    ]

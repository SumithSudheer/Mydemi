# Generated by Django 4.1.4 on 2023-01-04 19:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0002_alter_user_phone'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='phone',
            field=models.CharField(max_length=250, null=True, unique=True),
        ),
    ]

# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2017-05-18 08:10
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('landing', '0011_district'),
    ]

    operations = [
        migrations.AddField(
            model_name='district',
            name='region',
            field=models.CharField(choices=[('CR', 'Central'), ('ER', 'Eastern'), ('WE', 'Western'), ('NO', 'Northern')], default='', max_length=200),
        ),
    ]

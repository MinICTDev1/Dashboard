# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2017-05-18 07:27
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('landing', '0009_auto_20170518_0950'),
    ]

    operations = [
        migrations.AddField(
            model_name='year',
            name='end_date',
            field=models.DateField(default='2018-06-30'),
        ),
        migrations.AddField(
            model_name='year',
            name='start_date',
            field=models.DateField(default='2017-07-01'),
        ),
    ]

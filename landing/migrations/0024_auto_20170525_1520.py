# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2017-05-25 12:20
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('landing', '0023_auto_20170525_1307'),
    ]

    operations = [
        migrations.AlterField(
            model_name='budget',
            name='BudgetCategory',
            field=models.CharField(choices=[('', ''), ('PE', 'Petrol'), ('ST', 'Stationary'), ('AL', 'Allowances')], default='', max_length=200),
        ),
    ]

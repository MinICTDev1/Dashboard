# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2017-05-25 07:19
from __future__ import unicode_literals

from django.db import migrations
import multiselectfield.db.fields


class Migration(migrations.Migration):

    dependencies = [
        ('landing', '0017_budget_budgetitem'),
    ]

    operations = [
        migrations.AddField(
            model_name='budget',
            name='BudgetCategory',
            field=multiselectfield.db.fields.MultiSelectField(choices=[(1, ''), (2, 'Petrol'), (3, 'Stationary'), (4, 'Allowances')], default=1, max_length=7),
        ),
    ]
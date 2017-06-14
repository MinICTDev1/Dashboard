import datetime
import django_tables2 as tables
from django.db.models import Sum

from django.db import models
from django.utils import timezone
from django.utils.translation import gettext as _
from multiselectfield import MultiSelectField
import django_tables2 as tables

 
class Year(models.Model):
    financial_year = models.CharField(max_length=200)
    start_date = models.DateField(default='2017-07-01')
    end_date = models.DateField(default='2018-06-30')

    def __str__(self):
        return self.financial_year

    def whenDidItBegin(self):
        return self.start_date
    
    def whenDoesItEnd(self):
        return self.end_date

class District(models.Model):
    CENTRAL = 'CR'
    EASTERN = 'ER'
    WESTERN = 'WE'
    NORTHERN = 'NO'
    Region_choice = (
        (CENTRAL,'Central'),
        (EASTERN,'Eastern'),
        (WESTERN,'Western'),
        (NORTHERN,'Northern'),
    )
    District_name = models.CharField(max_length=200)
    region = models.CharField(max_length=200,choices=Region_choice,default="")

    def __str__(self):
        return self.District_name

    def which_Region(self):
        return self.region

class Project(models.Model):
    COMPLETED = 'CO'
    ONGOING = 'OG'
    STALLED = 'ST'
    FUTURE = 'FR'
    Status_choice = (
        (COMPLETED,'Completed'),
        (ONGOING,'Ongoing'),
        (STALLED,'Stalled'),
        (FUTURE,'Future'),
    )
    Project_name = models.CharField(max_length=200,default="")
    fin_year = models.ForeignKey('Year', related_name='financialyear', on_delete=models.CASCADE)
    district = models.ManyToManyField(District, blank=True, related_name='Districts')
    project_status = models.CharField(max_length=200,choices=Status_choice,default="")

    def __str__(self):
        return self.Project_name

    def whichFinYear(self):
        return self.fin_year

    def whichDistrict(self):
        return self.district

    def currentStatus(self):
        return str(self.project_status)

class Budget(models.Model):
    JULY = 'JU'
    AUGUST = 'AU'
    SEPTEMBER = 'SE'
    OCTOBER = 'OC'
    NOVEMBER = 'NO'
    DECEMBER = 'DE'
    JANUARY = 'JE'
    FEBRUARY = 'FE'
    MARCH = 'MA'
    APRIL = 'AP'
    MAY = 'MY'
    JUNE = 'JE'
    MONTHS = (
        ('JULY','july'),
        ('AUGUST','august'),
        ('SEPTEMBER','september'),
        ('OCTOBER','october'),
        ('NOVEMBER','november'),
        ('DECEMBER','december'),
        ('JANUARY','january'),
        ('FEBRUARY','february'),
        ('MARCH','march'),
        ('APRIL','april'),
        ('MAY','may'),
        ('JUNE','june'),
    )

    fin_year = models.ForeignKey('Year', related_name='financial_years', on_delete=models.CASCADE)
    month = models.CharField(max_length=200,choices=MONTHS,default="JULY")
    BudgetItem = models.CharField(max_length=200, default="")
    Approved = models.PositiveIntegerField(default=0)
    Estimates = models.PositiveIntegerField(default=0)
    Actual = models.PositiveIntegerField(default=0)

    def __str__(self):
        return '{} for  {} {} '.format(self.BudgetItem, str(self.fin_year), self.month)

    def WhichCategory(self):
        return self.BudgetCategory

    def approvedAmount(self):
        return str(self.Approved)

    def estimatesAmount(self):
        return str(self.Estimates)

    def actuualAmount(self):
        return str(self.Estimates)

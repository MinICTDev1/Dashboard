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

    # @property
    # def district_str(self):
    #     return ', '.join([district.name for district in district.objects.all()])

class Budget(models.Model):

    fin_year = models.ForeignKey('Year', related_name='financial_years', on_delete=models.CASCADE)
    BudgetItem = models.CharField(max_length=200, default="")
    Approved = models.PositiveIntegerField(default=0, help_text="Enter a figure, excluding commas")
    Estimates = models.PositiveIntegerField(default=0)
    July = models.PositiveIntegerField(default=0)
    August = models.PositiveIntegerField(default=0)
    September = models.PositiveIntegerField(default=0)
    October = models.PositiveIntegerField(default=0)
    November = models.PositiveIntegerField(default=0)
    December = models.PositiveIntegerField(default=0)
    January = models.PositiveIntegerField(default=0)
    February = models.PositiveIntegerField(default=0)
    March = models.PositiveIntegerField(default=0)
    April = models.PositiveIntegerField(default=0)
    May = models.PositiveIntegerField(default=0)
    June = models.PositiveIntegerField(default=0)

    def __str__(self):
        return '{}  {}'.format(self.BudgetItem, str(self.fin_year))

    def WhichItem(self):
        return self.BudgetItem

    def approvedAmount(self):
        return str(self.Approved)

    def estimatesAmount(self):
        return str(self.Estimates)

    def julyAmount(self):
        return str(self.July)

    def augustAmount(self):
        return str(self.August)

    def septemberAmount(self):
        return str(self.September)

    def octoberAmount(self):
        return str(self.October)

    def novemberAmount(self):
        return str(self.November)

    def decemberAmount(self):
        return str(self.December)

    def januaryAmount(self):
        return str(self.January)

    def februaryAmount(self):
        return str(self.February)

    def marchAmount(self):
        return str(self.March)

    def aprilAmount(self):
        return str(self.April)

    def mayAmount(self):
        return str(self.May)

    def juneAmount(self):
        return str(self.June)

    def Total(self):
        tots = self.July+self.August+self.September+self.October+self.November+self.December+self.January+self.February+self.March+self.April+self.May+self.June
        return str(tots)

    def TwoMonths(self):
        two = self.July+self.August
        return str(two)

    def ThreeMonths(self):
        three = self.July+self.August+self.September
        return str(three)

    def SixMonths(self):
        six = self.July+self.August+self.September+self.October+self.November+self.December
        return str(six)
    
    def NineMonths(self):
        nine = self.July+self.August+self.September+self.October+self.November+self.December+self.January+self.February+self.March
        return str(nine)

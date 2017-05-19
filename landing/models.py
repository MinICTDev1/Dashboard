import datetime

from django.db import models
from django.utils import timezone
 
class Year(models.Model):
    #year = models.PositiveIntegerField(default=2017)
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

class Budget(models.Model):
    fin_year = models.ForeignKey('Year', related_name='financial_years', on_delete=models.CASCADE)
    Approved = models.PositiveIntegerField(default=0)
    Estimates = models.PositiveIntegerField(default=0)
    Actual = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.fin_year

    def approvedAmount(self):
        return str(self.Approved)
    
    def estimatesAmount(self):
        return str(self.Estimates)
    
    def actuualAmount(self):
        return str(self.Estimates)

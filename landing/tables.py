import django_tables2 as tables
from .models import Budget, Project

class BudgetTable(tables.Table):
    class Meta:
        model = Budget
        fields = ("BudgetItem","Approved","Estimates","July","August","September","October","November", "December", "January", "February" , "March", "April", "May" ,"June","Total")
        attrs = {'class': 'paleblue'}

class JulyBudget(tables.Table):
    class Meta:
        model = Budget
        fields = ("BudgetItem","Approved","Estimates", "July")
        attrs = {'class': 'paleblue', 'width':'172%'}

class AugustBudget(tables.Table):
    class Meta:
        model = Budget
        fields = ("BudgetItem","Approved","Estimates", "July", "August", "TwoMonths")
        attrs = {'class': 'paleblue', 'width':'172%'}



















#The tables to do with the projects
class OngoingTable(tables.Table):
    class Meta:
        model = Project
        fields = ( "Project_name", "fin_year","district", "project_status")
        attrs = {'class': 'paleblue', 'width':'222%'}

class CompletedTable(tables.Table):
    class Meta:
        model = Project
        fields = ( "Project_name", "fin_year","district", "project_status")
        attrs = {'class': 'paleblue', 'width':'222%'}

class StalledTable(tables.Table):
    class Meta:
        model = Project
        fields = ( "Project_name", "fin_year","district", "project_status")
        attrs = {'class': 'paleblue', 'width':'222%'}

class FutureTable(tables.Table):
    class Meta:
        model = Project
        fields = ( "Project_name", "fin_year","district", "project_status")
        attrs = {'class': 'paleblue', 'width':'222%'}
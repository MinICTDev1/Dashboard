import django_tables2 as tables
from .models import Budget, Project

class BudgetTable(tables.Table):
    class Meta:
        model = Budget
        fields = ( "fin_year", "BudgetItem", "Approved", "month", "Estimates", "Actual")
        attrs = {'class': 'paleblue'}

class JulyBudgetTable(tables.Table):
    class Meta:
        model = Budget
        fields = ( "fin_year", "BudgetItem", "Approved", "month", "Estimates", "Actual")
        attrs = {'class': 'paleblue'}

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
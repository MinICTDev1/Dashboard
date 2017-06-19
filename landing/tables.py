import django_tables2 as tables
from .models import Budget, Project

class BudgetTable(tables.Table):
    class Meta:
        model = Budget
        attrs = {'class': 'paleblue'}
        fields = ("BudgetItem","Approved","Estimates","July","August","September","October","November", "December", "January", "February" , "March", "April", "May" ,"June","Total")

class QuarterOne(tables.Table):
    class Meta:
        model = Budget
        attrs = {'class': 'paleblue'}
        fields = ("BudgetItem","Approved","Estimates","July","August","September","ThreeMonths")

class QuarterTwo(tables.Table):
    class Meta:
        model = Budget
        attrs = {'class': 'paleblue', 'width':'auto'}
        fields = ("BudgetItem","Approved","Estimates","July","August","September","October","November","December","SixMonths")

class QuarterThree(tables.Table):
        class Meta:
            model = Budget
            attrs = {'class': 'paleblue', 'width':'auto'}
            fields = ("BudgetItem","Approved","Estimates","July","August","September","October","November","December", "January", "February" , "March", "NineMonths")

class QuarterFour(tables.Table):
        class Meta:
            model = Budget
            attrs = {'class': 'paleblue', 'width':'auto'}
            fields = ("BudgetItem","Approved","Estimates","July","August","September","October","November","December", "January", "February" , "March", "April", "May" ,"June","Total")

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
        fields = ( "Project_name", "fin_year", "district", "project_status")
        attrs = {'class': 'paleblue', 'width':'222%'}

    district = tables.Column()

    def render_district(self, value):
        if value is not None:
            return ', '.join([district.District_name for district in value.all()])
        return '-'

class CompletedTable(tables.Table):
    class Meta:
        model = Project
        fields = ( "Project_name", "fin_year","district", "project_status")
        attrs = {'class': 'paleblue', 'width':'222%'}

    district = tables.Column()

    def render_district(self, value):
        if value is not None:
            return ', '.join([district.District_name for district in value.all()])
        return '-'

class StalledTable(tables.Table):
    class Meta:
        model = Project
        fields = ( "Project_name", "fin_year","district", "project_status")
        attrs = {'class': 'paleblue', 'width':'222%'}

    district = tables.Column()

    def render_district(self, value):
        if value is not None:
            return ', '.join([district.District_name for district in value.all()])
        return '-'

class FutureTable(tables.Table):
    class Meta:
        model = Project
        fields = ( "Project_name", "fin_year","district", "project_status")
        attrs = {'class': 'paleblue', 'width':'222%'}

    district = tables.Column()

    def render_district(self, value):
        if value is not None:
            return ', '.join([district.District_name for district in value.all()])
        return '-'
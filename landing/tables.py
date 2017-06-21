import django_tables2 as tables
from .models import Budget, Project

class BudgetTable(tables.Table):
    class Meta:
        model = Budget
        attrs = {'class': 'paleblue', 'width':'auto'}
        fields = ("BudgetItem","Approved","Estimates","July","August","September","October","November", "December", "January", "February" , "March", "April", "May" ,"June","Total")

class QuarterOne(tables.Table):
    class Meta:
        model = Budget
        attrs = {'class': 'paleblue', 'width':'auto'}
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

# Individual month tables
class JulyBudget(tables.Table):
    class Meta:
        model = Budget
        fields = ("BudgetItem", "July")
        attrs = {'class': 'paleblue', 'width':'auto'}

class AugustBudget(tables.Table):
    class Meta:
        model = Budget
        fields = ("BudgetItem","July", "August")
        attrs = {'class': 'paleblue', 'width':'auto'}

class SeptemberBudget(tables.Table):
    class Meta:
        model = Budget
        fields = ("BudgetItem","July", "August", "September")
        attrs = {'class': 'paleblue', 'width':'auto'}

class OctoberBudget(tables.Table):
    class Meta:
        model = Budget
        fields = ("BudgetItem", "October")
        attrs = {'class': 'paleblue', 'width':'auto'}

class NovemberBudget(tables.Table):
    class Meta:
        model = Budget
        fields = ("BudgetItem","October", "November")
        attrs = {'class': 'paleblue', 'width':'auto'}

class DecemberBudget(tables.Table):
    class Meta:
        model = Budget
        fields = ("BudgetItem","October", "November", "December")
        attrs = {'class': 'paleblue', 'width':'auto'}

class JanuaryBudget(tables.Table):
    class Meta:
        model = Budget
        fields = ("BudgetItem","January")
        attrs = {'class': 'paleblue', 'width':'auto'}

class FebruaryBudget(tables.Table):
    class Meta:
        model = Budget
        fields = ("BudgetItem","January","February")
        attrs = {'class': 'paleblue', 'width':'auto'}

class MarchBudget(tables.Table):
    class Meta:
        model = Budget
        fields = ("BudgetItem","January","February","March")
        attrs = {'class': 'paleblue', 'width':'auto'}

class AprilBudget(tables.Table):
    class Meta:
        model = Budget
        fields = ("BudgetItem","April")
        attrs = {'class': 'paleblue', 'width':'auto'}

class MayBudget(tables.Table):
    class Meta:
        model = Budget
        fields = ("BudgetItem","April","May")
        attrs = {'class': 'paleblue', 'width':'auto'}

class JuneBudget(tables.Table):
    class Meta:
        model = Budget
        fields = ("BudgetItem","April","May","June")
        attrs = {'class': 'paleblue', 'width':'auto'}



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
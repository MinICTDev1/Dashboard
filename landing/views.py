from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, render_to_response
from django.template import RequestContext
import django_tables2 as tables
from django_tables2 import RequestConfig
from .models import Budget, Project,District
from django.views.generic.list import ListView
from .tables import *
import json
from django.core.serializers.json import DjangoJSONEncoder

# Create your views here.
#Base pages of the website
def index(request):
    return render(request, 'landing/index.html')

def predict(request):
    return render(request, 'landing/predict.html')

def compare(request):
    return render(request, 'landing/compare.html')

def export(request):
    return render(request, 'landing/export.html')


#Project section 

def projects(request):
    return render(request, 'landing/projects.html')

def ongoing(request):
    table = OngoingTable(Project.objects.filter(project_status='OG'))
    RequestConfig(request).configure(table)
    return render(request, 'landing/ongoing.html', {'table': table})

def completed(request):
    table = CompletedTable(Project.objects.filter(project_status='CO'))
    RequestConfig(request).configure(table)
    return render(request, 'landing/completed.html', {'table': table})

def stalled(request):
    table = StalledTable(Project.objects.filter(project_status='ST'))
    RequestConfig(request).configure(table)
    return render(request, 'landing/stalled.html', {'table': table})

def future(request):
    table = FutureTable(Project.objects.filter(project_status='FR'))
    RequestConfig(request).configure(table)
    return render(request, 'landing/future.html', {'table': table})


#Budget Section
def budget(request):
    table = BudgetTable(Budget.objects.all())
    RequestConfig(request, paginate={'per_page': 10}).configure(table)
    return render(request, 'landing/budgets.html', {'table': table})

def first(request):
    table = QuarterOne(Budget.objects.all())
    RequestConfig(request, paginate={'per_page': 10}).configure(table)
    return render(request, 'landing/Qone.html', {'table': table})

def second(request):
    table = QuarterTwo(Budget.objects.all())
    RequestConfig(request, paginate={'per_page': 10}).configure(table)
    return render(request, 'landing/Qtwo.html', {'table': table})

def third(request):
    table = QuarterThree(Budget.objects.all())
    RequestConfig(request, paginate={'per_page': 10}).configure(table)
    return render(request, 'landing/Qthree.html', {'table': table})

def fourth(request):
    table = QuarterFour(Budget.objects.all())
    RequestConfig(request, paginate={'per_page': 10}).configure(table)
    return render(request, 'landing/Qfour.html', {'table': table})

def julybudget(request):
    jtable = JulyBudget(Budget.objects.all())
    RequestConfig(request).configure(table)
    return render(request, 'landing/july.html', {'table': table})

def augustbudget(request):
    table = AugustBudget(Budget.objects.all())
    RequestConfig(request).configure(table)
    return render(request, 'landing/august.html', {'table': table})

def test(request):
    queryset = Budget.objects.all()
    # DataSource object
    data_source = ModelDataSource(queryset, fields=['BudgetItem','Total'])
    # Chart object
    pie_chart = gchart.PieChart(data_source)
    return render(request, 'landing/tickle.html')

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
    RequestConfig(request, paginate=False).configure(table)
    #The paginate can be activated by replacing the false with {'per_page': XX}
    #Depending on how you many values you want displayed on each page
    return render(request, 'landing/budgets.html', {'table': table})

def first(request):
    budgetData = Budget.objects.all()
    table = QuarterOne(budgetData)
    JulyTable = JulyBudget(budgetData)
    AugustTable = AugustBudget(budgetData)
    SeptemberTable = SeptemberBudget(budgetData)
    RequestConfig(request, paginate=False).configure(table)
    RequestConfig(request, paginate=False).configure(JulyTable)
    RequestConfig(request, paginate=False).configure(AugustTable)
    RequestConfig(request, paginate=False).configure(SeptemberTable)

    payload = {
        'table': table,
        'JulyTable': JulyTable,
        'AugustTable': AugustTable,
        'SeptemberTable': SeptemberTable,
    }

    return render(request, 'landing/Qone.html', payload)

def second(request):
    budgetData = Budget.objects.all()
    table = QuarterTwo(budgetData)
    OctoberTable = OctoberBudget(budgetData)
    NovemberTable = NovemberBudget(budgetData)
    DecemberTable = DecemberBudget(budgetData)
    RequestConfig(request, paginate=False).configure(table)
    RequestConfig(request, paginate=False).configure(OctoberTable)
    RequestConfig(request, paginate=False).configure(NovemberTable)
    RequestConfig(request, paginate=False).configure(DecemberTable)

    payload = {
        'table': table,
        'OctoberTable': OctoberTable,
        'NovemberTable': NovemberTable,
        'DecemberTable': DecemberTable,
    }
    return render(request, 'landing/Qtwo.html', payload)

def third(request):
    budgetData = Budget.objects.all()
    table = QuarterThree(budgetData)
    JanuaryTable = JanuaryBudget(budgetData)
    FebruaryTable = FebruaryBudget(budgetData)
    MarchTable = MarchBudget(budgetData)
    RequestConfig(request, paginate=False).configure(table)
    RequestConfig(request, paginate=False).configure(JanuaryTable)
    RequestConfig(request, paginate=False).configure(FebruaryTable)
    RequestConfig(request, paginate=False).configure(MarchTable)

    payload = {
        'table': table,
        'JanuaryTable': JanuaryTable,
        'FebruaryTable': FebruaryTable,
        'MarchTable': MarchTable,
    }
    return render(request, 'landing/Qthree.html', payload)

def fourth(request):
    budgetData = Budget.objects.all()
    table = QuarterFour(budgetData)
    AprilTable = AprilBudget(budgetData)
    MayTable = MayBudget(budgetData)
    JuneTable = JuneBudget(budgetData)
    RequestConfig(request, paginate=False).configure(table)
    RequestConfig(request, paginate=False).configure(AprilTable)
    RequestConfig(request, paginate=False).configure(MayTable)
    RequestConfig(request, paginate=False).configure(JuneTable)

    payload = {
        'table': table,
        'AprilTable': AprilTable,
        'MayTable': MayTable,
        'JuneTable': JuneTable,
    }
    return render(request, 'landing/Qfour.html', payload)
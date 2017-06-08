from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, render_to_response
from django.template import RequestContext
import django_tables2 as tables
from django_tables2 import RequestConfig
from .models import Budget, Project,District
from django.views.generic.list import ListView

from .tables import *

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
    return render(request, 'landing/ongoing.html', {'table': table})

def completed(request):
    table = CompletedTable(Project.objects.filter(project_status='CO'))
    return render(request, 'landing/completed.html', {'table': table})

def stalled(request):
    table = StalledTable(Project.objects.filter(project_status='ST'))
    return render(request, 'landing/stalled.html', {'table': table})

def future(request):
    table = FutureTable(Project.objects.filter(project_status='FR'))
    return render(request, 'landing/future.html', {'table': table})


#Budget Section
def budget(request):
    table = BudgetTable(Budget.objects.all())
    return render(request, 'landing/budgets.html', {'table': table})

def julybudget(request):
    table = JulyBudget(Budget.objects.all())
    return render(request, 'landing/july.html', {'table': table})

def augustbudget(request):
    table = AugustBudget(Budget.objects.all())
    return render(request, 'landing/august.html', {'table': table})

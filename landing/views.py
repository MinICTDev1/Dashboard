from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, render_to_response
from django.template import RequestContext
import django_tables2 as tables
from django_tables2 import RequestConfig
from .models import Budget, Project
from .tables import BudgetTable, OngoingTable, CompletedTable, StalledTable, FutureTable


# Create your views here.

def index(request):
    return render(request, 'landing/index.html')

def projects(request):
    return render(request, 'landing/projects.html')

def budget(request):
    table = BudgetTable(Budget.objects.all())
    RequestConfig(request).configure(table)
    return render(request, 'landing/budgets.html', {'table': table})

def predict(request):
    return render(request, 'landing/predict.html')

def compare(request):
    return render(request, 'landing/compare.html')

def export(request):
    return render(request, 'landing/export.html')

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


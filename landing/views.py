from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
import django_tables2 as tables

from .models import Person

# Create your views here.

def index(request):
    return render(request, 'landing/index.html')

def projects(request):
    return render(request, 'landing/projects.html')

def budget(request):
    return render(request, 'landing/budget.html')

def predict(request):
    return render(request, 'landing/predict.html')

def compare(request):
    return render(request, 'landing/compare.html')

def export(request):
    return render(request, 'landing/export.html')

def people(request):
    return render(request, 'landing/people.html', {'people': Person.objects.all()})
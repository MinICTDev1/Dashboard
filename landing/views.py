from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, redirect
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

def simple_list(request):
    queryset = Simple.objects.all()
    table = SimpleTable(queryset)
    return render(request, 'landing/simple_list.html', {'table': table})    
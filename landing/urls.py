from django.conf.urls import url
import django_tables2 as tables

from . import views
from landing.views import BudgetListingView


urlpatterns = [
    url(r'^$', views.index, name="index"),
    # ex: /landing/projects/
    url(r'^projects/$', views.projects, name='projects'),
    # ex: /landing/budget/
    url(r'^budget/$', views.budget, name='budgets'),
    # ex: /landing/predict/
    url(r'^predict/$', views.predict, name='predict'),
    # ex: /landing/compare/
    url(r'^compare/$', views.compare, name='compare'),
    # ex: /landing/export/
    url(r'^export/$', views.export, name='export'),
    url(r'^budL$', BudgetListingView.as_view(), name='budget-list'),

    # for the project submenu's
    url(r'^projects/ongoing/$', views.ongoing, name='ongoing'),
    url(r'^projects/completed/$', views.completed, name='completed'),
    url(r'^projects/stalled/$', views.stalled, name='stalled'),
    url(r'^projects/future/$', views.future, name='future'),
    
    #for the individual months
    url(r'^budget/july/$', views.july, name='july'),


]
from django.conf.urls import url
import django_tables2 as tables

from . import views


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

    #respective months
    url(r'^july/$', views.julybudget, name='july'),
    url(r'^august/$', views.augustbudget, name='august'),

    # for the project submenu's
    url(r'^projects/ongoing/$', views.ongoing, name='ongoing'),
    url(r'^projects/completed/$', views.completed, name='completed'),
    url(r'^projects/stalled/$', views.stalled, name='stalled'),
    url(r'^projects/future/$', views.future, name='future'),
]
from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name="index"),
    # ex: /landing/projects/
    url(r'^projects/$', views.projects, name='projects'),
    # ex: /landing/budget/
    url(r'^budget/$', views.budget, name='budget'),
    # ex: /landing/predict/
    url(r'^predict/$', views.predict, name='predict'),
    # ex: /landing/compare/
    url(r'^compare/$', views.compare, name='compare'),
    # ex: /landing/export/
    url(r'^export/$', views.export, name='export'),
]
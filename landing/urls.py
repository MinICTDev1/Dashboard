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
    url(r'^QOne/$', views.first, name='first'),
    url(r'^QTwo/$', views.second, name='second'),
    url(r'^QThree/$', views.third, name='third'),
    url(r'^QFour/$', views.fourth, name='fourth'),

    # for the project submenu's
    url(r'^projects/ongoing/$', views.ongoing, name='ongoing'),
    url(r'^projects/completed/$', views.completed, name='completed'),
    url(r'^projects/stalled/$', views.stalled, name='stalled'),
    url(r'^projects/future/$', views.future, name='future'),
]

# Use include() to add URLS from the other applications from the startapp 
# from django.conf.urls import include

# urlpatterns += [
#     url(r'^catalog/', include('catalog.urls')),
# ]

#Add URL maps to redirect the base URL to our application
# from django.views.generic import RedirectView
# urlpatterns += [
#     url(r'^$', RedirectView.as_view(url='/catalog/', permanent=True)),
# ]

#alternatively 

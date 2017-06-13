import json
import logging
from django.views.generic import TemplateView
from .models import Budget

class BudgetView(TemplateView):
    template_name = 'landing/budgets.html'

    def get_context_data(self):
        items = Budget.objects.all().count()
        data = {}
        for item in range(items):
            data[Budget.objects.all()[item].WhichItem()] = Budget.objects.all()[item].Total()

        return data
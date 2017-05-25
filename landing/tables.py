import django_tables2 as tables
from .models import Budget

class BudgetTable(tables.Table):
    class Meta:
        model = Budget
        attrs = {'class': 'paleblue'}
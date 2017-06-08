import json
imprt utils.views

from .models import *

class BudgetView():
    """Main landing for Budget views

    """

    template_name = 'landing/budgets.html'

    def get_context_data(self):
        """Populate a dictionary to use as the template context
        
        """

        itemCount = Budget.objects.all().count()
        data = {}
        for item in range(ItemCount):
            data[Budget.objects.all()[item].WhichItem()] = Budget.objects.all()[item].Total()


    def make_number_dict():
        """Returns a Dictionary
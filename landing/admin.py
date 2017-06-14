from django.contrib import admin

# Register your models here.
from .models import Year, District, Project, Budget

@admin.register(Year,District,Project,Budget)
class LandingAdmin(admin.ModelAdmin):
    pass
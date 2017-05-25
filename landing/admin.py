from django.contrib import admin

# Register your models here.
from .models import Year, District, Project

@admin.register(Year,District,Project)
class LandingAdmin(admin.ModelAdmin):
    pass

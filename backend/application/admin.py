from django.contrib import admin
from .models import Application, UserApplication


class ApplicationAdmin(admin.ModelAdmin):
    list_display = ('company', 'position', 'created_on')
    readonly_fields = ('created_on', 'last_modified')

admin.site.register((Application, UserApplication), ApplicationAdmin)


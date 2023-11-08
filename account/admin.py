from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .forms import CustomUserCreationForm
from .models import CustomUser

class CustomUserAdmin(UserAdmin):
    form = CustomUserCreationForm
    model = CustomUser
    list_display = ["email" ,"username", "date_joined", "last_login"]

admin.site.register(CustomUser, CustomUserAdmin)

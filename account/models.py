from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    email           = models.EmailField(unique=True)
    username        = models.CharField(max_length=10, unique=True)
    date_joined     = models.DateTimeField(verbose_name="date joined", auto_now_add=True)
    last_login      = models.DateField(verbose_name="last login", auto_now=True)


    def __str__(self):
        return self.username

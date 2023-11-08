from django.urls import path
from . import views
from django.contrib.auth.decorators import login_required
from django.views.generic import TemplateView

urlpatterns  = [
    path('', views.home, name='home'),
    path('getstarted/', views.getstarted, name='getstarted'),
    path('signin/', views.signin, name='signin'),
    path('about/', views.about, name='about'),
    path('home/', login_required(TemplateView.as_view(template_name = "loginview/home.html")), name='loginhome'),
    path('logoutview/', views.logoutview, name='logoutview'),
    path('donate/', views.donate, name='donate'),
    path('company/', views.company, name='company'),

]
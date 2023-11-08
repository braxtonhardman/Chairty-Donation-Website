from django.shortcuts import render, redirect
from django.contrib.auth import login, logout
from django.contrib.auth.forms import AuthenticationForm
from account.forms import CustomUserCreationForm

def home(request):
    context={}
    return render(request, 'guestview/home.html', context)

def getstarted(request):
    form = CustomUserCreationForm()
    if request.method == 'POST':
        # Check if Username has unwanted Characters
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            redirect('/home')
    context={'form': form}
    return render(request, 'forms/getstarted.html', context)

def signin(request):
    if request.method == "POST":
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect('/home')
        else:
            form = AuthenticationForm()
    
    return render(request, 'forms/signin.html')

def loginhome(request):
    if request.user.is_authenticated:
        context = {"username": request.user.username}
        return render(request, 'loginview/home.html', context)
    else:
        return redirect('/signin')

def about(request):
    context={}
    return render(request, 'guestview/about.html', context)

def logoutview(request):
    if request.user != None:
        logout(request)
        return redirect('/')
    
def donate(request):
    context = {}
    return render(request, 'guestview/donate.html', context)

def company(request):
    context = {}
    return render(request, 'guestview/company.html', context)
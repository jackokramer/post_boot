from django.shortcuts import render, redirect
from django.contrib import messages
from .models import *
# Create your views here.
def index(request):
    return render(request, 'index.html')

def success(request):
    return render(request, 'home.html')

def register(request):
    if request.method== 'POST':
        errors = User.objects.validator(request.POST)
        print(errors)
        if len(errors)>0:
            for key, values in errors.items():
                messages.errors(request, values),
            return redirect('/')
        return redirect("/success")
    return redirect("/")

def login(request):
    print('is my method being called')
    if request.method == 'POST':
        logged_user = User.object.filter(email=request.POST['email'])
        if len (logged_user)>0:
            logged_user = logged_user[0]
            if logged_user.password == request.POST['password']:
                return redirect('/sucess')
        return redirect('/')
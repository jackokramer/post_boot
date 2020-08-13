from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from .models import *

# Create your views here.
def index(request):
    return render(request,'index.html')

def success(request):
    return render(request, 'results.html')

def process(request):
    if request.method == 'POST':
        errors = User.objects.basic_manage(request.POST) ## def on the User manager has to be mentioned here before the parenthese
        print(errors)
        if len(errors) > 0:
            for key, values in errors.items():
                messges.error(request, values)
            return redirect('/')
        new_user = User.objects.create(
            first_name=request.POST['first_name'], 
            last_name=request.POST['last_name'],
            email=request.POST['email'],
            password=request.POST['password'])
        request.session['name'] = new_user.first_name
        return redirect('/success')
    return redirect('/')

def login(request):
    if request.method == 'POST':
        logged_user = User.objects.filter(email=request.POST['email'])
        print(User.objects.all())
        if len(logged_user)>0:
            logged_user = logged_user[0]
            print(logged_user)
            if logged_user.password == request.POST['password']:
                request.session['name'] = logged_user.first_name
                return redirect('/success')
    return redirect('/')

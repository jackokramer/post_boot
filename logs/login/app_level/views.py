from django.shortcuts import render, redirect
from django.contrib import messages
from .models import User

# Create your views here.
def index(request):
    return render(request, 'index.html')

def success(request):
    if 'name' not in request.session:
        return redirect('/')
    return render(request, 'results.html')

def regis(request):
    if request.method == 'POST':
        errors = User.objects.validator(request.POST)
        print(errors)
        if len(errors)>0:
            for key, value in errors.items():
                messages.error(request, value)
            return redirect("/")
        new_user = User.objects.create(first_name=request.POST['first_name'], last_name=request.POST['last_name'], email=request.POST['email'], password=request.POST['password'])
        request.session['name'] = new_user.first_name
        return redirect('/success')
    return redirect("/")

def login(request):
    if request.method == 'POST':
        logged_user = User.objects.filter(email=request.POST['email'])
        logged_user = logged_user[0]
        if logged_user.password == request.POST['password']:
            request.session['name'] = logged_user.first_name
            return redirect("/success")
    return redirect("/")

def logout(request):
    request.session.flush()
    return redirect("/")
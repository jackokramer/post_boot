from django.shortcuts import render, redirect
from .models import Users

# Create your views here.
def index(request):
    context = {
        'users': Users.objects.all()
    }
    return render(request, "index.html", context)

def finished(request):
    Users.objects.create(
        first_name = request.POST['first_name'],
        last_name = request.POST['last_name'],
        email = request.POST['email'],
        age = reques.POST['age'],
    )
    return render("/")

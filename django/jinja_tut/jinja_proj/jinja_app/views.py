from django.shortcuts import render, HttpResponse, redirect
from django.template import context

# Create your views here.

def index(request):
    return render(request,'index.html')


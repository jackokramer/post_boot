from django.shortcuts import render, HttpResponse


# Create your views here Logics for the projects go here.
def index(request):
    return HttpResponse('this is my response')
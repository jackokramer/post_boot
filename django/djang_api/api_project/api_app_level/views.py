from django.shortcuts import render, HttpResponse, request

# Create your views here.
def index(request):
    return HttpResponse('Hello')
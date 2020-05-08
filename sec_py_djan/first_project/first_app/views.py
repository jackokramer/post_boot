from django.shortcuts import render, HttpResponse

# Create your views here.
def index(request): ## always pass in request to ensure the request response cycle
    return HttpResponse('Hi everyone. here`s the app')
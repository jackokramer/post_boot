from django.shortcuts import render

# Create your views here.
## views are functions that takes an http response

def home(request):
    return render(request, 'base/index.html')
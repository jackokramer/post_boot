from django.shortcuts import render, redirect

# Create your views here.
def index(request):
    return render(request, 'index.html')

def new(request):
    return render(request, 'new.html')

def create(request):
    print(request.POST)
    return redirect('/')

def edit(request, show_id):
    return render(request, 'edit.html')

def show(request, show_id):
    return render(request, 'edit.html')
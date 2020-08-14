from django.shortcuts import render, redirect
from .models import Movie

# Create your views here.
def index(request):
    context = {
        'movies': Movie.objects.all()
    }
    return render(request, 'index.html', context)

def new(request):
    return render(request, 'new.html')

def create(request):
    Movie.objects.create(
        title = request.POST['title'],
        network = request.POST['network'],
        release_date = request.POST['release_date'],
        description = request.POST['description']
    )
    return redirect('/')

def edit(request, movie_id):
    return render(request, 'edit.html')

def show(request, movie_id):
    return render(request, 'one_show.html')

def delete(request, movie_id):
    return redirect('/')
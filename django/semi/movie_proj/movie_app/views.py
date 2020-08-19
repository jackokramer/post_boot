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
    one_movie = Movie.objects.get(id=movie_id)
    context = {
        'movie': one_movie
    }
    return render(request, 'edit.html', context)

def update(request, movie_id):
    ## update movie
    to_update = Movie.objects.get(id=movie_id)
    ## updates each field
    to_update.title = request.POST['title'],
    to_update.network = request.POST['network'],
    to_update.release_date = request.POST['release_date'],
    to_update.description = request.POST['description']

    return redirect('/movies')

def show(request, movie_id):
    one_movie = Movie.objects.get(id=movie_id)
    context = {
        'movie': one_movie
    }
    return render(request, 'one_show.html', context)

def delete(request, movie_id):
    # To Delete A show
    to_delete = Movie.objects.get(id=movie_id)
    to_delete.delete()
    return redirect('/movies')
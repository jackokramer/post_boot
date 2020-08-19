from django.shortcuts import render, redirect
from .models import Movie

# Create your views here.
def index(request):
    context = {
        'movies': Movie.objects.all()
    }
    return render(request, 'all_movie.html' ,context)
def new(request):
    return render(request, 'new.html')
def create(request):
    Movie.objects.create(
        Title = request.POST['Title'],
        production = request.POST['production'],
        description = request.POST['description'],
        release_date = request.POST['release_date']
    )
    return redirect('/')

def edit(request, movie_id):
    one_movie = Movie.objects.get(id=movie_id)
    context ={
        'movie': one_movie
    }
    return render(request, 'edit.html', context)

def update(request, movie_id):
    #update show
    to_update = Movie.objects.get(id=movie_id)
    to_update.Title = request.POST['Title'],
    to_update.production = request.POST['production'],
    to_update.description = request.POST['description'],
    to_update.release_date = request.POST['release_date']

    return redirect("/shows/")

def show(request, movie_id):
    #query for one show with show if
    one_movie = Movie.objects.get(id=movie_id)
    context ={
        'movie': one_movie
    }
    return render(request, 'descr.html', context)

def delete(request, movie_id):
    ## note delete one show
    on_delete = Movie.objects.get(id=movie_id)
    on_delete.delete()
    return redirect('/movies')


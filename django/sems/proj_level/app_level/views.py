from django.shortcuts import render, redirect
from .models import *

# Create your views here.
def index(request):
    context= {
        'movies': Movie.objects.all()
    }
    return render(request, 'index.html', context)

def new(request):
    return render(request, 'new.html')

def add_movie(request):
    Movie.objects.create(
        title= request.POST['title'],
        production = request.POST["production"],
        director =request.POST['director'],
        release_date = request.POST["release_date"],
        description = request.POST['description']
    )
    return redirect("/movies")

def add_dir(request):
    Director.objects.create(
        first_name = request.POST['first_name'],
        Last_name = request.POST['Last_name'],
        email = request.POST['email'],
        age = request.POST['age']
    )
    return redirect("/movies")

def edit(request, movie_id):
    one_movie = Movie.objects.get(id=movie_id)
    context ={
        'movie': one_movie
    }
    return render(request, 'edit.html', context)

def update(request, movie_id):
    ## update movie
    to_update = Movie.objects.get(id=movie_id)
    to_update.title = request.POST['title'],
    to_update.production = request.POST['production'],
    to_update.director = request.POST['director'],
    to_update.release_date = request.POST['release_date'],
    to_update.description = request.POST['description'],
    to_update.save()
    
    return redirect("/movies/")

def movie(request, movie_id):
    one_movie = Movie.objects.get(id=movie_id)
    context ={
        'movie': one_movie
    }
    return render(request, 'movie.html', context)

def delete(request, movie_id):
    #NOTE DELETE ONE SHOW
    to_delete = Show.object.get(id=show_id)
    to_delete.delete()
    return redirect("/movies")
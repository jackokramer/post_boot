from django.shortcuts import render, HttpResponse, redirect
from .models import Director, Movie

# Create your views here.
def index(request):
    return HttpResponse("Placeholder for links to movies and directors")

def movies(request):
    return HttpResponse("Placeholder for link to movies")

def directors(request):
    return HttpResponse("Placeholder for links to directors")

def one_director(request, id):
    return HttpResponse("Placeholder for links to a director")

def one_movie(request, id):
    return HttpResponse("Placeholder for link to a movie")

def delete_director(request, id):
    return HttpResponse(f"Placeholder to delete a director {id}")

def delete_movie(request, id):
    return HttpResponse("Placeholder to delete a movie")

def edit_director(request, id):
    return HttpResponse("Placeholder to edit a director")

def edit_movie(request, id):
    return HttpResponse("Placeholder to edit a movie")

def actors(request):
    return HttpResponse('Placeholder for actors')
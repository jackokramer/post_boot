from django.shortcuts import render, HttpResponse, redirect
from .models import *

# Create your views here.
def index(request):
    #render some HTML with hyperlinks to /movies or /directors
    return render(request, 'index.html')

def movies(request):
    ## grab all movies 
    context = {
        'all_movies': Movie.objects.all(),
        'all_directors': Director.objects.all()
    }
    return render(request, 'movies.html', context)
def add_movie(request):
    ## add movies
    if request.method == 'POST':
        print(request.POST)
        Movie.objects.create(
            title=request.POST['title'],
            description=request.POST['description'],
            director= Director.objects.get(id=request.POST['director']))
        return redirect('/movies')
    return redirect('/')

def directors(request):
    ## grab all directors from database
    ## render page with add director form and table for all directors
    context= {
        'all_directors': Director.objects.all()
    }
    return render(request, 'director.html', context)
def add_director(request):
    if request.method =='POST':
        print(request.POST)
        Director.objects.create(
            name=request.POST['name'],
            email=request.POST['email'],
            about=request.POST['about']
            )
        return redirect('/directors')
    return redirect('/')

def one_director(request, id):
    ## retrieve this director form db
    context ={
        'director': Director.objects.get(id=id)
    }
    #render page with all director data
    return render(request, "one_director.html", context)

def one_movie(request, id):
    return HttpResponse("Placeholder for link to a movie")

def delete_director(request, id):
    ## retrieve corresponding director
    deleted_director = Director.objects.get(id=id)
    deleted_director.delete() ## you can chain this above
    #delete them
    return HttpResponse('/director')

def delete_movie(request, id):
    return HttpResponse("Placeholder to delete a movie")

def edit_director(request, id):
    if request.method == 'post':
        edit_director = Director.objects.get(id=id)
        edit_director.name = request.POST['name']
        edit_director.email = request.POST['email']
        edit_director.save()
    return redirect("/directors") # return redirect(f'/director/{id})

def edit_movie(request, id):
    return HttpResponse("Placeholder to edit a movie")

def actors(request):
    return HttpResponse('Placeholder for actors')
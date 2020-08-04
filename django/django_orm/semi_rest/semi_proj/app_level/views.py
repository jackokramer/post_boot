from django.shortcuts import render, redirect
from .models import TvShows
# Create your views here.
def index(request):
    context= {
        'TvShows': TvShows.objects.all()
    }
    return render(request, 'index.html', context)

def new(request):
    return render(request, 'new.html')

def create(request):
    ### create the show
    TvShows.objects.create(
        title= request.POST['title'],
        network = request.POST['network'],
        release_date= request.POST['release_date'],
        description = request.POST['description']
    )
    print(request.POST)
    return redirect('/')

def edit(request, show_id):
    return render(request, 'edit.html')

def show(request, show_id):
    return render(request, 'edit.html')
def delete(request, show_id):
    #NOte delete one show
    return redirect('/shows')
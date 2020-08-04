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
    one_show = TvShows.object.get(id=TvShows)
    context = {
        'show': one_show
    }
    return render(request, 'edit.html', context)

def update(request, show_id):
    ## update show and query for a show
    to_update = TvShows.object.get(id=TvShows.id)
    ## updates each field
    to_update.title = request.POST['title'],
    to_update.network = request.POST['network'],
    to_update.release_date = request.POST['release_date'],
    to_update.description = request.POST['description'],
    to_update.save()
    return redirect('/shows/')

def edit(request, show_id):
    return render(request, 'edit.html')

def show(request, show_id):
    ## query for one show with show_id
    one_show = TvShows.objects.get(id=show_id)
    context = {
        'show': one_show
    }

    return render(request, 'show.html', context)
def delete(request, show_id):
    #NOte delete one show
    ondelete = TvShows.objects.get(id=TvShows_id)
    ondelete.delete()
    return redirect('/shows')
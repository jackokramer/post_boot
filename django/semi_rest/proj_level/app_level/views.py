from django.shortcuts import render, redirect
from .models import Show

# Create your views here.
def index(request):
    context ={
        'shows': Show.objects.all()
    }
    return render(request, 'index.html', context)

def new(request):
    return render(request, 'new.html')

def create(request):
    ##create show
    Show.objects.create(
        title = request.POST['title'],
        network = request.POST['network'],
        release_date = request.POST['release_date'],
        description = request.POST['description']        
    )
    return redirect("/shows")

def edit(request, show_id):
    one_show = Show.objects.get(id=show_id)
    #query for one show
    context = {
        'show': one_show
    }
    return render(request, 'edit.html', context)

def update(request, show_id):
    ## update show
    to_update = Show.objects.get(id=show_id)
    # updates each field
    to_update.title =  request.POST['title']
    to_update.network = request.POST['network']
    to_update.release_date = request.POST['release_date']
    to_update.description = request.POST['description']
    to_update.save()
    return redirect('/shows')

def show(request, show_id):
    #query for one show with show_id
    one_show = Show.objects.get(id=show_id)
    context = {
        'Show': one_show
    }
    return render(request, 'shows.html', context)

def delete(request, show_id):
    ## delete one show
    to_delete = Show.objects.get(id=show_id).delete()
    return redirect('/')


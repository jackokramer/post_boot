from django.shortcuts import render, redirect
from .models import Book, Author

# Create your views here.
def index(request):
    context = {
        'authors': Author.objects.all()
    }
    return render(request, 'index.html', context)

def new(request):
    return render(request, 'new.html')


def create_author(request):
    Author.objects.create(
        first_name = request.POST['first_name'],
        last_name = request.POST['last_name'],
        home_town = request.POST['home_town'],
        genre = request.POST['genre']
    )
    print(request.POST)
    return redirect('/')

def author(request, author_id):
    ## query for one author with author id
    one_author= Author.objects.get(id=author_id)
    context ={
        author: one_author
    }
    return render(request, 'author.html',context)

def author_edit(request, book_id, author_id):
    return render(request, 'edit_author.html')

def delete_author(request, author_id):
    return redirect('/')


def edit(request, book_id, author_id):
    return render(request, 'edit.html')

def create(request):
    ## create the show
    Book.objects.create(
        title= request.POST['title'],
        publisher= request.POST['publisher'],
        author = request.POST['author'],
        description= request.POST['description'],
        release_date = request.POST['release_date']
    )
    print(request.POST)
    return redirect('/')

def book(request, book_id):
    ## query for one book with book_id
    one_book= Book.objects.get(id=book_id)
    context= {
        book: one_book
    }
    return render(request,'book.html', context)

def delete(request, book_id):
    return redirect('/')

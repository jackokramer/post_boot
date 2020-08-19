from django.shortcuts import render, redirect
from .models import User, Post

# Create your views here.
def index(request):
    ## logging in a user
    request.session['user_id'] = 1
    context = {
        'users': User.objects.all()
    }
    return render(request, 'index.html', context)

def create(request):
    User.objects.create(
        first_name= request.POST['first_name'],
        last_name= request.POST['last_name'],
        age= request.POST['age'],
        email= request.POST['email']
    )
    return redirect('/')

def posts(request):
    conetxt ={
        'posts': Post.objects.all()
        #'user': User.objects.get(id=request.session['user_id'])
    }
    return render(request, 'posts.html', conetxt)

def create_post(request):
    user_in_session = User.objects.get(id=request.session['user_id'])
    Post.objects.create(
        content=request.POST['content'],
        author=user_in_session
        )
    return redirect('/posts')
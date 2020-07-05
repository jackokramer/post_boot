from django.shortcuts import render, request
from django.views.generic import ListView, DetailView, CreateView
from .models import Post
from  .forms import PostForm

# Create your views here.
def index(request):
    model = Post
    template_name = 'index.html'
    return render(request, "index.html")

def poster(request):
    model = Post
    template_name = 'result.html'
    return render(request, 'result.html')

def AddPostView(CreateView):
    model = Post
    template_name= 'add_post.html'
    fields = '__all__'
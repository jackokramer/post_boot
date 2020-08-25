from django.shortcuts import render, redirect
from .models import *
from django.contrib import messages


# Create your views here.
def index(request):
    return render(request,'index.html')

def success(request):
    if 'name' not in request.session:
        return redirect("/")
    context = {
        'wall_message': Wall_Message.objects.all()
    }
    return render(request, 'results.html', context)

def regis(request):
    if request.method =='POST':
        errors = User.objects.validator(request.POST)
        print(errors)
        if len(errors)>0:
            for key, value in errors.items():
                messages.error(request, value)
            return redirect("/")
        new_user = User.objects.create(first_name=request.POST['first_name'], last_name=request.POST['last_name'], email=request.POST['email'], password=request.POST['password'])
        request.session['name'] = new_user.first_name
        request.session['id'] = new_user.id
        return redirect('/success')

def login(request):
    if request.method == 'POST':
        logged_user = User.objects.filter(email=request.POST['email'])
        if len(logged_user)>0:
            logged_user = logged_user[0]
            if logged_user.password == request.POST['password']:
                request.session['name'] = logged_user.first_name
                return redirect('/success')
    return redirect('/')

def logout(request):
    request.session.flush()
    return redirect('/')

def post_message(request):
    Wall_Message.objects.create(message=request.POST['message'])
    return redirect('/success')

def post_comment(request, post_id):
    ## create
    poster = User.objects.get(id = request.session['id'])
    message = Wall_Message.objects.get(id=_post_id)
    Comment.objects.create(comment=request.POST['comment'], poster=poster, message=message)
    return redirect('/success')
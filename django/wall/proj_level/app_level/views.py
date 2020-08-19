from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from .models import *

# Create your views here.
def index(request):
    return render(request,'index.html')

def success(request):
    if 'name' in request.session:
        context = {
            'all_quotes': Quote.objects.all()
        }
        return render(request, 'results.html', context)
    return redirect("/")

def process(request):
    if request.method == 'POST':
        errors = User.objects.basic_manage(request.POST) ## def on the User manager has to be mentioned here before the parenthese
        print(errors)
        if len(errors) > 0:
            for key, values in errors.items():
                messges.error(request, values)
            return redirect('/')
        new_user = User.objects.create(
            first_name=request.POST['first_name'], 
            last_name=request.POST['last_name'],
            email=request.POST['email'],
            password=request.POST['password'])
        request.session['name'] = new_user.first_name
        request.session['id'] = new_user.id
        return redirect('/success')
    return redirect('/')

def login(request):
    if request.method == 'POST':
        logged_user = User.objects.filter(email=request.POST['email'])
        print(User.objects.all())
        if len(logged_user)>0:
            logged_user = logged_user[0]
            print(logged_user)
            if logged_user.password == request.POST['password']:
                request.session['name'] = logged_user.first_name
                request.session['id'] = logged_user.id
                return redirect('/success')
    return redirect('/')

def posts(request):
    if request.method == 'POST':
        new_quote = Quote.objects.create(quote=request.POST['quote'], poster=User.objects.get(id=request.session['id']))
        print(new_quote)
        return redirect('/success')
    return redirect('/')

def comment(request, com_id):
    if request.method == 'POST':
        new_comm = Comment.objects.create(comment=request.POST['comment'], poster=User.objects.get(id=request.session['id']), quote=Quote.objects.get(id=com_id))
        print(new_comm)
        return redirect("/success")
    return redirect("/")

def like(request, com_id):
    user_like= User.objects.get(id=request.session['id'])
    quote_liked = Quote.objects.get(id=com_id)
    quote_liked.likes.add(user_like)
    return redirect('/success')
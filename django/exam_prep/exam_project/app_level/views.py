from django.shortcuts import render, redirect
from .models import *

# Create your views here.
def index(request):
    return redirect('/main')

def main(request):
    return render(request, 'login.html')


##log/regis methods
def regis(request):
    if request.method == 'POST':
        print(request.POST)
    new_user =User.objects.create(first_name=request.POST['first_name'], last_name=request.POST['last_name'], email=request.POST['email'], password=request.POST['password'])
    request.session['name'] = new_user.first_name + ' ' + new_user.last_name
    request.session['user_id'] = new_user.id
    print(new_user)
    return redirect('/groups')
    return redirect('/main')

def login(request):
    if request.method == 'POST':
        print(request.POST)
        logged_user = User.objects.filter(email=request.POST['email'])
        ## if the filter query returned any users
        if len(logged_user)>0:
            #store that user in logged user 
            logged_user = logged_user[0]
            if logged_user.password == request.POST['password']:
                print(logged_user, 'successfully logged in')
                request.session['name'] = logged_user.first_name + ' ' + logged_user.last_name
                request.session['user_id'] = logged_user.id
                return redirect('/groups')
    return redirect('/')

    ## groups
def groups(request):
    context = {
        'all_orgs': Organization.objects.all()
    }
    return render(request, 'index.html', context)

def create_org(request):
    if request.method == 'POST':
        ## create an org
        user = User.objects.get(id = request.session['user_id'])
        new_org = Organization.objects.create(name= request.POST['org_name'], description= request.POST['description'], creator= user)
        print(new_org)
        new_org.members.add(user)
        return redirect('/groups')
    return redirect('/main')

## routes with parameters
def one_group(request, id):
    #get the clicked group
    context = {
        'one_group': Organization.objects.get(id=id)
    }
    return render(request, 'group.html', context)

def join_group(request, id):
    ## user logged in
    user = User.objects.get(id=request.session['user_id'])
    ## group being joined
    org = Organization.objects.get(id=id)
    ## add user to org
    org.members.add(user)
    return redirect (' /groups/{user.id}')

def leave_group(request, id):
    user = User.objects.get(id=request.session['user_id'])
    org = Organization.objects.get(id=id)
    org.members.remove(user)
    return redirect('/groups/{user.id}')

##logout

def logout(request):
    request.session.flush()
    return redirect('/')
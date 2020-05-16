from django.shortcuts import render, redirect, HttpResponse

# Create your views here.
def index(request):
    ##print(request.POST['username']) You cannot access information from another route
    return render(request,'index.html')

def process(request):
    if request.method != 'POST':
        return redirect('/')
    print(request.POST['username'])
    print(request.POST['email'])
    print(request.POST['password'])
    return redirect("/results")
## never render on a post

def results(request):
    context = {
    'username': request.POST['username'],
    'email': request.POST['email'],
    'password': request.POST['password']
    }
    return render(request, 'results.html', context)

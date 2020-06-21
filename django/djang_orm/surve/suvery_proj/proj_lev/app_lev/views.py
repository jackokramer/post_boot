from django.shortcuts import render, redirect

# Create your views here.
def index(request):
    return render(request,'index.html')

def process(request):
    print(request.method)
    if request.method == 'POST':
        context ={
            'first_name': request.POST['first_name'],
            'last_name': request.POST['last_name'],
            'email': request.POST['email'],
            'language': request.POST['language'],
            'location': request.POST['location'],
            'comments': request.POST['comments'],
        }
        return redirect(request, '/processed')

def processed(request):
    print('got here from the redirect')
    return render(request, 'results.html', context)

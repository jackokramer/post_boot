from django.shortcuts import render, redirect

# Create your views here.
def index(request):
    #print(method['POST'])
    return render(request, 'index.html')

def process(request):
    return redirect("/result")

def result(request):
    if request.method== 'POST':
        context= {
            'first_name': request.POST['first_name'],
            'last_name': request.POST['last_name'],
            'email': request.POST['email'],
            'location': request.POST['location'],
            'language': request.POST['language'],
            'comments': request.POST['comments']
        }
        print('got here from the redirect')
        return render(request, 'result.html', context) ## Not showing stuff from user's submitted info
    #first_name = request.POST['first_name']
    #last_name = request.POST['last_name']
    #email = request.POST['email']
    #location = request.POST['location']
    #laguage = request.POST['language']
    #comments = request.POST['comments']
    return render(request, 'result.html') # added context here but nothing
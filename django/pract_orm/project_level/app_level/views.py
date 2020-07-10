from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'index.html')

def process(request):
    print(request.method)
    if request.method =="POST":
        context ={
            'name': request.POST['name'],
            'language': request.POST['language'],
            'location': request.POST['location'],
            #'comments': request.POST['comments']
        }
    return render(request, 'result.html', context)

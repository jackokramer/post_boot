from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

def process(request):
    print(request.method)
    if request.method == 'POST':
        context = {
            'fullname': request.POST['fullname'],
            'location': request.POST['location'],
            "language": request.POST['language'],
            'comments': request.POST['comments']
        }
    return render(request, 'results.html', context)
# Create your views here.

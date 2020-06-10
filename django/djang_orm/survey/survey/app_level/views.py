from django.shortcuts import render

def index(request):
    return render(request, "index.html")

def process(request):
    if request.method == 'POST':
        context = {
            'first_name': request.POST['first_name'],
            'last_name': request.POST['last_name'],
            'email': request.POST['email'],
            'location': request.POST['location'],
            'language': request.POST['language'],
            'comment': request.POST['comment']
        }
        return render(request, 'result.html', context)
    return render(request, 'result.html')
# Create your views here.

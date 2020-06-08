from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def index(request):
    return render(request, 'index.html')

def process(request):
    print(request.method)
    if request.method == 'POST':
        context = {
            "first_name": request.POST['first_name'],
            "last_name": request.POST['last_name'],
            "language": request.POST['language'],
            "location": request.POST['location'],
            "comment": request.POST['comments']
        }
        return render(request, 'result.html', context)
    #return render(request, 'result.html')
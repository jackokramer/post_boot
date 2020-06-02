from django.shortcuts import render, redirect

# Create your views here.
def index(request):
    return render(request, "index.html")

def process(request):
    print(request.method)
    if request.method == 'POST':
        context = {
            'name': request.POST['name'],
            'language': request.POST['language'],
            'location': request.POST['location']
        }
        return render(request, 'result.html', context)

def results(request):
    # if request.method == "POST"
    print(request.POST)
    return render(request, "results.html")
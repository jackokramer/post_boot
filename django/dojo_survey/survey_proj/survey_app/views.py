from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def index(request):
    return render(request, "index.html")

def results(request):
    # if request.method == "POST"
    print(request.POST)
    return render(request, "results.html")
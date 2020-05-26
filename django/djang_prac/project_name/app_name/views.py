from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def index(request):
    return render(request, 'index.html')

def process(request):
    print(request.method)
    if request.method == "POST":
        ## play the game
        return redirect("/")
    #request.POST['username']
    return redirect("/")
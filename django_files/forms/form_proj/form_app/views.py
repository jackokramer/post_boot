from django.shortcuts import render, redirect, HttpResponse

# Create your views here.
def index(request):
    return render(request,'index.html')

def process(request):
    if request.method != 'POST':
        return redirect('/')
    print(request.POST)
    return HttpResponse('This is a post route')

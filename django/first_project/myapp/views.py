from django.shortcuts import render, HttpResponse

# Create your views here. logic for projects go here

def index(request):
    return render(request, 'index.html')

def hello(request, name):
    context= {
        'url_name': name,
        'numbers': [6,8,3,2]
    }
    return render(request, 'hello.html', context)

def go_home(request):
    return HttpResponse('go home valley')

def add(request, num1, num2):
    my_sum= num1+num2
    return HttpResponse(f'Result = {my_sum} from {num1} + {num2}')

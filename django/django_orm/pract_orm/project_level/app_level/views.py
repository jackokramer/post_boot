from django.shortcuts import render, redirect

locations = (
    "Seattle",
    "St Louis",
    "San Jose",
    "Oakland",
    "Chicago",
    "Miami",
    "New York",
    "Tulsa"
)

languages = (
    'Pythong',
    'Django',
    "C#",
    "Java",
    "JavaScript",
    "Mean",
    "Ruby"
)

# Create your views here.
def index(request):
    contexts = {
        'languages': languages,
        'locations': locations
    }
    return render(request, 'index.html', contexts)

def process(request):
    print(request.method)
    if request.method =="GET":
        return redirect("/")
    request.session['result'] ={
            'name': request.POST['name'],
            'languages': request.POST['languages'],
            'locations': request.POST['locations'],
            'comments': request.POST['comments']
        }
    return redirect('/result')

def result(request):
    context = {
        'result': request.session['result']
    }
    return render(request, 'result.html', context)

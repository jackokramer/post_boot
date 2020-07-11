from django.shortcuts import render, redirect

# Create your views here.

languages = (
    'Python',
    'JavaScript',
    'C#',
    'Java',
    'iOS',
    'Mean'
)
locations = (
    'San Jose',
    'Seattle',
    'Burbank',
    'Chicago',
    'Online'
)
def index(request):
    contexts ={
        'locations': locations,
        'languages': languages
    }
    return render(request, 'index.html', contexts)

def process(request):
    print(request.method)
    if request.method =="GET":
        return redirect('/')
    request.session['result'] = {
            'name': request.POST['name'],
            'languages': request.POST['languages'],
            'locations': request.POST['locations'],
            'comments': request.POST['comments']
        }
    return redirect("/result")

def result(request):
    context = {
        'result': request.session['result']
    }
    return render(request, 'result.html', context)

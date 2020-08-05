from django.shortcuts import render, redirect

langs =(
    'Python',
    'Java',
    'C#',
    'Mean',
    'C++',
    'JavaScript'
)

# Create your views here.
def index(request):
    context = {
        'languages': langs
    }
    return render(request, 'index.html', context)

def process(request):
    if request.method == 'GET':
        return redirect("/")
    request.session['result'] = {
            'first_name': request.POST['first_name'],
            'last_name': request.POST['last_name'],
            'email': request.POST['email'],
            'language':request.POST['language'],
            'description': request.POST['description']
    }
    return redirect('/results')

def results(request):
    print('results are in and trumps out....')
    context = {
        'result': request.session['result'] 
    }
    return render(request, 'results.html', context)
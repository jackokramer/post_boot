from django.shortcuts import render

# Create your views here.
def index(request):
    context = {
        'all_of_the_users': 'Here we are' ## how do you add submitted information from the shell
    }
    return render(request, 'index.html', context)
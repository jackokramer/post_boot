from django.shortcuts import render, HttpResponse, redirect
import random

# Create your views here.
def index(request):
    if 'results' not in request.session:
        request.session['results'] = []
    return render(request, 'index.html')

def process(request):
    print(request.method)
    name = request.POST(['user_name']),
    guess = request.POST(['user_guess'])
    if request.method == "POST":
        com_num = int(random.random()*10)
        if int(request.POST['user_guess'])>com_num:
            request.session['results'].append(f"{request.POST['user_name']} guessed too high. Guess: {request.POST['user_guess']} was higher than {com_num}")
        elif int(request.POST['user_guess'])<com_num:
            request.session['results'].append(f"{request.POST['user_name']} guessed too low. Guess: {request.POST['user_guess']} was less than {com_num}")
        else:
            request.session['results'].append(f"{request.POST['user_name']}) You guessed the number{com_num}")
        #print(com_num, 'this is the random number generated')
        print(request.POST["this is my request.post"])
        print(request.POST['user_name'])
        print(request.POST['user_guess'])
        return redirect("/")
    #request.POST['username']
    return redirect("/")
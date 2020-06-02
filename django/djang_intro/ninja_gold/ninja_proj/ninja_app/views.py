from django.shortcuts import render, redirect
import random ## where do you add random in lines 16-35

# Create your views here.
def index(request):
    if 'gold' in request.session:
        return render(request, 'index.html')
    else:
        request.session['gold'] = 0

        return render(request, "index.html")

def new(request):
    return render(request, 'new.html')

def process(request):
    ## determine which place user submitted
    print(request.POST['place'])
    if request.POST['place'] == 'casino':
        request.session['gold'] -= 50
        request.session['result'] = 'You lost money'
        print('Gone gambling')
    elif request.POST['place'] == 'farm':
        request.session['gold'] +=50
        request.session['result'] = 'You worked hard good job'
        print('went farming')
    elif request.POST['place'] == 'cave':
        request.session['gold'] +=15
        request.session['result'] = 'You went primal'
        print('gone primal')
    elif request.POST['place'] == 'house':
        request.session['gold'] +=20
        print('goin home')
    ## affect gold accordingly
    return redirect('/')
def clear(clear):
    print(request.post['session cleared'])
    session.clear() ## doesn't clear sesssion
    return redirect('/')
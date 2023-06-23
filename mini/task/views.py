from django.shortcuts import render,redirect
from django.contrib.auth.models import User

# Create your views here.

def home(request):
    return render(request,'index.html')

def login(request):
    if request.method == 'POST':
        username=request.POST['username']
        password=request.POST['password']
        user=User(username=username,password=password)
        return redirect('register')
    return render(request,'login.html')


def register(request):
    if request.method == 'POST':
        username=request.POST['username']
        email=request.POST['email']
        password=request.POST['password']

        user=User.objects.create_user(username=username,email=email,password=password)
        user.save()
        return redirect('main')
    return render(request,'register.html')

def main(request):
    return render(request,'main.html')

def logout(request):
    return redirect('home')

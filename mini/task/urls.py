from django.urls import path
from .views import home,login,register,main,logout

urlpatterns = [
    
    path('', home,name='home'),
    path('login/', login,name='login'),
    path('register/', register,name='register'),
    path('main/', main,name='main'),
    path('logout/', logout,name='logout'),
    



]
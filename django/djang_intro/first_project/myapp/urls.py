from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('hello/<str:name>', views.hello),## needs data type and name of the variable. 
    path('go_home', views.go_home),
    path('add/<int:num1>/<int:num2>', views.add)
]

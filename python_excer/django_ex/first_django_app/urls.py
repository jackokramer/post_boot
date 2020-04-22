from django.urls import path
from . import views ## better than the other

urlpatterns = [
    path('', views.index),
]
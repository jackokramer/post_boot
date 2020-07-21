from django.urls import path
from . import views

urlpatterns = [
    #localhost 8000/shows
    path('', views.index),
    #localhose 600/showws/new
    path('new', views.index),
    #localhost: 8000/shows/<show_id>/edit
    path('<int:show_id>/edit', views.index),
    #localhost: 8000/shows/<show_id>/
    path('<int:show_id>', views.index),
]

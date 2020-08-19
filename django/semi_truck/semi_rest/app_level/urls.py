from django.urls import path
from . import views

urlpatterns = [
    ## localhost:8000/movies
    path('', views.index),
    ## localhost:8000/movies/new
    path('new', views.new),
    ## localhost:8000/movies/new
    path('create', views.create),
    ## localhost:8000/movies/<show_id>/edit
    path('<int:movie_id>/edit', views.edit),
    ## update
     path('<int:movie_id>/update', views.update),
    ## localhost:8000/movies/<movie_id>/
    path('<int:movie_id>', views.show),
    ## delete
    path('<int:movie_id>/delete', views.delete)




]

from django.urls import path
from . import views

urlpatterns = [
    ## shows on the other urls.py prefixes the route to have shows/
    ## localhost:8000/movies
    path('', views.index),
    ## localhost:8000/movies/new
    path('new', views.new),
    ## localhost:8000/movie/add
    path('add_movie', views.add_movie),
    ## localhost:8000/movie/add_dir
    path('add_dir', views.add_dir),
    ## localhost:8000/movies/<movie_id>/edit
    path('<int:movie_id>/edit', views.edit),
    ## localhost:8000/movies/<movie_id>/edit
    path('<int:movie_id>/update', views.update),
    ## localhost:8000/movies/<movie_id>
    path('<int:movie_id>', views.movie),
    ## localhost:8000/movies/<movie_id>
    path('<int:movie_id>/delete', views.delete)
]
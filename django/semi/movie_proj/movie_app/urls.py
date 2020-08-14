from django.urls import path
from . import views

urlpatterns = [
    #localhost: 8000/shows
    path('', views.index),
    #localhost: 8000/shows/new
    path('new', views.new),
    path('create', views.create),
    #localhost: 8000/shows/<shows_id>
    path('<int:movie_id>', views.edit),
    #localhost: 8000/shows/<shows_id>edit
    path('<int:movie_id>/edit', views.show),
    #localhost:8000/shows/<show_id>/delete
    path('<int:show_id>/delete', views.delete)

]

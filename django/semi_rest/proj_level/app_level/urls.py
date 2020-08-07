from django.urls import path
from . import views

urlpatterns = [
    ## everything is prefixed with shows/
    path('', views.index),
    #localhost: 800/shows/new
    path('new', views.new),
    path('create', views.create),
    #localhost: 8000/shows/<show_id>/edit
    path('<int:show_id>/edit', views.edit),
    #localhost:800/shows/<show_id>
    path('<int:show_id>', views.show),
    #localhost: 800 /shows/<show_id>/delete
    path('<int: show_id>/delete', views.show)
]
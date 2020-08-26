from django.urls import path
from . import views

urlpatterns = [
    ##localhost: 8000/shows
    path('', views.index),
    ##localhost: 8000/shows/new
    path('new', views.new),
    ## add book
    path('create/<int:author_id>', views.create),
    ## add author
    path('create_author', views.create_author),
    ##localhost: 8000/shows/<author_id>/edit
    path('<int:author_id>/edit', views.author_edit),
    ##localhost: 8000/shows/<book_id>/edit
    path('<int:book_id>/edit', views.edit),
    ##localhost: 8000/books/<book_id>
    path('<int:book_id>', views.book),
    ##localhost: 8000/books/<book_id>/delete
    path('<int:book_id>/delete', views.delete),
    ##localhost: 8000/books/<author_id>
    path('<int:author_id>', views.author),
    ##localhost: 8000/books/<author_id>/delete
    path('<int:author_id>/delete', views.delete_author)
]

from django.db import models
from datetime import datetime

# Create your models here.
class Author(models.Model):
    first_name= models.CharField(max_length=255)
    last_name= models.CharField(max_length=255)
    home_town= models.CharField(max_length=255)
    genre = models.CharField(max_length=255)
    created_at= models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Book(models.Model):
    title = models.CharField(max_length=255)
    publisher = models.CharField(max_length=255)
    author = models.ForeignKey(Author, related_name='books', on_delete =models.CASCADE)
    description = models.CharField(max_length=255)
    release_date = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

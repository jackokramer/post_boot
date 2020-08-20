from django.db import models

# Create your models here.
class Director(models.Model):
    first_name = models.CharField(max_length=45)
    Last_name = models.CharField(max_length=45)
    email = models.CharField(max_length=45)
    age = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Movie(models.Model):
    title = models.CharField(max_length=75)
    production = models.CharField(max_length=75)
    director = models.CharField(max_length=100)
    release_date = models.DateField() ## DATE FEILD gets rid of time
    description = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
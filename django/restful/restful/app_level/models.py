from django.db import models

# Create your models here.
class Director(models.Model):
    name= models.CharField(max_length=45)
    email = models.CharField(max_length=45)
    about = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Movie(models.Model):
    title = models.CharField(max_length=45)
    description = models.TextField()
    director = models.ForeignKey(Director, related_name="movies", on_delete=models.CASCADE)
    release_date = models.DateTimeField(auto_now_add=True)
    created_at = models.DateTimeField(auto_now_add=True)

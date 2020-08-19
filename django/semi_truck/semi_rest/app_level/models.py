from django.db import models

# Create your models here.
class Movie(models.Model):
    Title = models.CharField(max_length=50)
    production = models.CharField(max_length=50)
    description = models.CharField(max_length=250)
    release_date= models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

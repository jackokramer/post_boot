from django.db import models

# Create your models here.
class User(models.Model):
    name = models.CharField(max_length=45)
    email = models.CharField(max_length=45)
    language = models.CharField(max_length=45)
    location = models.CharField(max_length=45)
    comments = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)

class Wizard(models.Model):
    name = models.CharField(max_length = 45)
    house = models.CharField(max_length = 45)
    pet = models.CharField(max_length = 45)
    year = models.IntegerField()

def __repr__(self):
    return "Name"#f"<Movie objects: {self.name} ({self.id})>"
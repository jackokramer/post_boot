from django.db import models

# Create your models here.
class Users(models.Model):
    first_name = models.Charfield(max_length=30)
    last_name = models.Charfield(max_length=30)
    email = models.Charfield(max_length=50)
    password = models.Charfield(max_length=20)

class Movie(models.Model):
    title = models.Charfield(max_length=30)
    created_at = models.DateTimeField(auto_now_add=True)
    poster = models.ForeignKey(User, related_name='movies_posted', on_delete=models.CASCADE)

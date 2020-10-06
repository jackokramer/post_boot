from django.db import models

# Create your models here.
class Post(models.Model):
    full_name = models.CharField(max_length=100, null=true)
    time = models.DateTimeField(auto_now_add=True)
    message = models.CharField(max_length=200, null=true)

class User(models.Model):
    first_name = models.CharField(max_length=50, null=true)
    last_name = models.CharField(max_length=50)
    email = models.CharField(max_length=100)
    

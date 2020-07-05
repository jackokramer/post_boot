from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse

# Create your models here.

class Post(models.Model):
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    language = models.CharField(max_length=255)
    comments = models.CharField(max_length=255)

    def __str__(self):
        return self.title + '|' + str(self.author)
    
    def get_absolute(self):
        #return reverse('article-detail', args(str(self))
        return reverse('home')
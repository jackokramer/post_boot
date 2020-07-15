from django.db import models

class Users(models.Model):
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    email = models.CharField(max_length=45)
    location = models.CharField(max_length=45)
    language = models.CharField(max_length=45)
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)

def __repr__(self):
    return "First_name{}".format(self.first_name)

# Create your models here. ^^^^

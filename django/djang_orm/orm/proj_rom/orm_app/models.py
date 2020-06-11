from django.db import models

# Create your models here. Run migrations anytime you make changes to the models.py file
class Movie(models.Model):
    title = models.CharField(max_length=45)
    description = models.TextField()
    release_date = models.DateTimeField()
    duration = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)

class User(models.Model):
    first_name = models.CharField(max_length = 255)
    last_name = models.CharField(max_length = 255)
    email = models.CharField(max_length = 255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)

class Message_Post(models.Model):
    message = models.TextField()
    poster = models.ForeignKey(User, related_name='Message_Post', on_delete=models.User) ## weird error
    likes = models.ManyToMany(User, related_name = "likes") ## DONT NEED ONDELETE FOR MANYtoMany
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)

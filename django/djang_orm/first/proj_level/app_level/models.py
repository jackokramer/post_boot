from django.db import models


class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)


class Message_POST(models.Model):
    message = models.CharField(max_length = 255)
    poster = models.ForeignKey(User, related_name=User, on_delete= models.Model)
    likes = models.ManyToManyField(User, related_name="likes")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)

#MANY TO MANY Line 15

## create a new user
#new_user = User()
#new_user.save
# Create your models here.

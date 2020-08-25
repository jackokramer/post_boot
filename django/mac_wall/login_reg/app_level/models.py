from django.db import models
import re

# Create your models here.
class UserManager(models.Manager):
    def validator(self, PostData):
        errors = {}
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if len(PostData['first_name'])<2:
            errors['first_name']= 'First name is too short'
        if len(PostData['last_name'])<3:
            errors['last_name']= 'Last name is too short'
        if not EMAIL_REGEX.match(PostData['email']):
            errors['email'] = "email must be a valid format"
        if len(PostData['password'])<8:
            errors['password'] = "password is too short"
        if PostData['password'] != PostData['confirm']:
            errors['confirm'] = 'Passwords do not match'
        return errors

class User(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    created_at =  models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now= True)
    objects = UserManager()

class Wall_Message(models.Model):
    message = models.CharField(max_length=255)
    poster = models.ForeignKey(User, related_name='user_message', on_delete=models.CASCADE)

class Comment(models.Model):
    comment = models.CharField(max_length=255)
    poster = models.ForeignKey(User, related_name='user_comments', on_delete=models.CASCADE)
    wall_message = models.ForeignKey(Wall_Message, related_name="post_comment", on_delete=models.CASCADE)
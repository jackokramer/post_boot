from django.db import models
import re

# Create your models here.

class UserManager(models.Manager):
    def basic_manage(self, postData):
        errors = {}
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if len(postData['first_name'])<2:
            errors['first_name'] = 'Your name is too short'
        if len(postData['last_name'])<4:
            errors['last_name'] = 'Your last name is too short'
        if not EMAIL_REGEX.match(postData['email']):
            errors['email'] = 'Email must match a valid format'
        if len(postData['password'])< 6:
            errors['password'] = "password must be at least 8 characters"
        if postData['password'] != postData['confirm_password']:
            errors['confirm_password'] = 'Password and confirm password do not match'
        return errors

class PoetManager(models.Manager):
    def manage(self, postdata):
        errors= {}
        if len(postdata['full_name'])<7:
            errors['full_name'] = "Name is too show needs to be more than 7 character and a space inbtween"
        if len(postdata['quote'])<8:
            errors['quote'] = " Please write a complete sentence"
        return errors

class User(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()

class Quote(models.Model):
    full_name = models.CharField(max_length=100)
    quote= models.TextField()
    poster = models.ForeignKey(User, related_name="quotes", on_delete = models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    likes = models.ManyToManyField(User, related_name="quotes_liked")
    updated_at = models.DateTimeField(auto_now=True)
    
class Comment(models.Model):
    comment= models.CharField(max_length=255)
    poster = models.ForeignKey(User, related_name="comments", on_delete = models.CASCADE)
    quote = models.ForeignKey(Quote, related_name='comments', on_delete = models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
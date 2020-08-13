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

class User(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()
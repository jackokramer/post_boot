from django.db import models
import re


# Create your models here.
class UserMange(models.Manager):
    def validator(self, postdata):
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        errors = {}
        if len(postdata['first_name'])<2:
            errors['first_name'] = " Names should be more than two characters"
        if len(postdata['last_name'])<2:
            errors['last_name'] = " Names should be more than two characters"
        if not EMAIL_REGEX.match(postdata['email']):
            errors['email'] = ('invalid email address')
        if len(postdata['password'])<7:
            errors['password'] = ('password is too short.')
        if postdata['password'] != postdata['confirm']:
            errors['confirm'] = 'Passwords do not match'
        return errors


class User(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserMange()
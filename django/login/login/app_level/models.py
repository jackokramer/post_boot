from django.db import models
import re
class UserManage(models.Manager):
    def validator(self, postData):
        errors = {}
        ## add keys and vlaues to errors dictionary for each invalid field
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

        if len(postData['first_name']) < 2:
            errors['first_name'] = "First name must be more than 2 characters"
        if len(postData['last_name'])<3:
            errors['last_name'] = 'last name has to be 3 or more characters'
        if not EMAIL_REGEX.match(postData['email']):
            errors['email'] = "email must be a valid format"
        if len(postData['password'])<8:
            errors['password'] = "password must be at least 8 characters"
        if postData['password'] != postData['confirm']:
            errors['confirm'] = 'passwords must match'
        return errors

# Create your models here.
class User(models.Model):
    first_name = models.CharField(max_length= 100)
    last_name = models.CharField(max_length= 100)
    email = models.CharField(max_length= 100)
    password = models.CharField(max_length =50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManage()

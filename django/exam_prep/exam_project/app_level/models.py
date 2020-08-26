from django.db import models
import re
## Validations
class UserManager(models.Manager):
    def validator(self, postData):
        errors={}
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if len(postData['first_name'])<2:
            errors['first_name']= 'First name is too short'
        if len(postData['last_name'])<2:
            errors['last_name'] = 'last name is too short'
        if not EMAIL_REGEX.match(postData['email']):
            errors['email'] = 'email must be in a valid format'
        if len(postData['password'])<6:
            errors['password'] = 'password is too short'
        if postData['password'] != postData['confirm']:
            errors['confirm'] = 'Passwords must match'
        return errors

# Create your models here.
class User(models.Model):
    first_name = models.CharField(max_length=55)
    last_name = models.CharField(max_length=55)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=55)
    created_at= models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()

class Organization(models.Model):
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    creator = models.ForeignKey(User, related_name='created_organizations', on_delete=models.CASCADE)
    members = models.ManyToManyField(User, related_name='organizations')
    created_at= models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
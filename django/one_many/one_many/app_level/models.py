from django.db import models

# Create your models here.
class User(models.Model):
    ## heres where the field go
    ## first name var char
    ## id auto genereated
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    age = models.IntegerField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField

    # obejcts -> queries
    def __str__(self):
        return #f"{self.first_name} {self.last_name}" can't show names

class Post(models.Model):
    content = models.TextField() ## no limit with textfield
    #likes many to many
    #comments many to many
    #image
    author = models.ForeignKey(User, related_name = "posts", on_delete= models.CASCADE) # SET_NULL will send an author field to nothing
    #author
    created_at = models.DateTimeField(auto_now_add=True) # creates the time stamp
    updated_at = models.DateTimeField(auto_now=True) #timestamp
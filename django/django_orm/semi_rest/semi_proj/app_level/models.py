from django.db import models

# Create your models here.
class Director(models.Model):
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at= models.DateTimeField(auto_now=True)

class TvShows(models.Model):
    title = models.CharField(max_length=100)
    network = models.CharField(max_length=100)
    description = models.TextField()
    director = models.ForeignKey(Director, related_name='TvShows', on_delete = models.CASCADE)
    release_date = models.DateTimeField()
    durations = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


def __repr__(self):
    return "Title: {}".format(self.title)
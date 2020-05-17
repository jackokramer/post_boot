from django.urls import path
from . import views
from django.core.urlresolvers import reverse

urlpatterns = [
    path('', views.index)
]
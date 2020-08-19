from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('process', views.process),
    path('login', views.login),
    path('success', views.success),
    path('posts', views.posts),
    path('comment/<int:com_id>',  views.comment),
    path('like/<int:com_id>', views.like)
]
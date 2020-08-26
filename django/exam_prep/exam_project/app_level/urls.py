from django.urls import path
from .import views

urlpatterns = [
    path('', views.index),
    path('main', views.main),
    path('regis', views.regis),
    path('login', views.login),
    ##groups oath
    path('groups', views.groups),
    path('create_org', views.create_org),
    ## routing with parameters
    path('groups/<int:id>', views.one_group),
    path('join/<int:id>', views.join_group),
    path('leave/<int:id>', views.leave_group),
    ##logout
    path('logout', views.logout)
]

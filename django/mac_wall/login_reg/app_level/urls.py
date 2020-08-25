from django.urls import path
from . import views

urlpatterns = [
    path('', views.index,),
    path('regis', views.regis),
    path('login', views.login),
    path('success', views.success),
    path('logout', views.logout),
    path('process_message', views.post_message),
    path('add_comment/<int:id>', views.post_comment)
]
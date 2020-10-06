from django.urls import path
from . import urls

urlpatterns = [
    path('', include('app_level.urls')),
    path('/login'),
    path('regis'),
    path('message')
]
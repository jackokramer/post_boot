from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^new$', views.new), ## not working here
    url(r"^process_gold$", views.process),
    url(r"^clear$", views.clear)
]
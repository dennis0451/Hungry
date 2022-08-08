from django.urls import path
from . import views

urlpatterns = [
    path('', views.send_the_message),

    #API calls
    path('signup', views.sign_up),
    path('login', views.log_in),
    path('logout', views.log_out),
    path('whoami', views.who_am_i),
    #Edamam
    path('test', views.test),
]
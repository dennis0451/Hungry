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
    path('food_run', views.food_run),
    path('favorite', views.favorite),
    path('cookbook', views.cookbook),
    path('delete', views.delete),
    # path('test_two', views.test_two),

    #new
    # path('recipe', views.create_recipe),
    # path('favorites')
    
]

import re
from sre_constants import SUCCESS
from django.shortcuts import render
from django.core import serializers
from django.http import HttpResponse, JsonResponse
from django.contrib.auth import authenticate, login, logout
from rest_framework.decorators import api_view
from .models import AppUser as User, Recipe
import json
# from requests_oauthlib import OAuth1
import http.client

# Create your views here.

def send_the_message(request):
    print('home')
    theIndex = open('static/index.html').read()
    return HttpResponse(theIndex)

@api_view(['POST'])
def food_run(request):
    print('got a request!')

    # print(dir(request))
    food = request.data['food']

    conn = http.client.HTTPSConnection("edamam-recipe-search.p.rapidapi.com")

    headers = {
        'X-RapidAPI-Key': "2a17de6765mshb02808769540d65p13f41bjsn9bb17a3c9752",
        'X-RapidAPI-Host': "edamam-recipe-search.p.rapidapi.com"
        }

    conn.request("GET", f'/search?q={food}', headers=headers)

    res = conn.getresponse()
    data = res.read()

    # print(data)
    return HttpResponse(data)


@api_view(['POST'])
def favorite(request):
    print('got a FAVORITE request!')

    if Recipe.objects.filter(label = request.data['label']).exists():
        print('duplicate')
        return HttpResponse({request:request})
    else:
        newFavorite = Recipe(label=request.data['label'], image=request.data['image'], url=request.data['url'])
        newFavorite.save()
        return HttpResponse({request:request})

@api_view(['GET'])
def cookbook(request):
    print(request.user)
    test = serializers.serialize("json",Recipe.objects.all())
    # print(test)

    return HttpResponse({test : test})

@api_view(['POST'])
def delete(request):
    print('delete requested')
    url = request.data['url']
    recipe_to_delete = Recipe.objects.all().filter(url=(url))
    recipe_to_delete.delete()


    return HttpResponse({'success':'successfully deleted'})


@api_view(['POST'])
def sign_up(request):
    try:
        User.objects.create_user(username=request.data['email'], password=request.data['password'], email=request.data['email'])
    except Exception as e:
        print(str(e))
    return HttpResponse('hi')


@api_view(['POST'])
def log_in(request):


    # DRF assumes that the body is JSON, and automatically parses it into a dictionary at request.data
    email = request.data['email']
    password = request.data['password']
    # user = authenticate(username=email, password=password, email=email)
    user = authenticate(username=email, password=password)
    print('user?')
    print(user.email)
    print(user.password)
    if user is not None:
        if user.is_active:
            try:
                # access the base request, not the DRF request
                # this starts a login session for this user
                login(request._request, user)
            except Exception as e:
                print('except')
                print(str(e))
            return HttpResponse('success!')
            # Redirect to a success page.
        else:
            return HttpResponse('not active!')
            # Return a 'disabled account' error message
    else:
        return HttpResponse('no user!')
        # Return an 'invalid login' error message.

@api_view(['POST'])
def log_out(request):
    logout(request)
    return JsonResponse({'success':True})




@api_view(['GET'])
def who_am_i(request):
    # Make sure that you don't send sensitive information to the client, such as password hashes
    # raise Exception('oops')
    if request.user.is_authenticated:
        data = serializers.serialize("json", [request.user], fields=['email', 'username'])

        return HttpResponse(data)
    else:
        return JsonResponse({'user':None})
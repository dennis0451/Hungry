
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

# @api_view(['POST'])
# def test_two(request):
#     R1 = Recipe(label="Sweet Cinnamon Rice Pudding",
#     image= "https://edamam-product-images.s3.amazonaws.com/web-img/957/957c045ab56f3bd4dd195fb839aeffdd.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDWiR8rvMTEWnq4gpSvGA%2FfJ%2BQr2GBEgLEXrLeIvTPL9AIhAODLb%2FvmcwZLySU%2FYxM7SfgOC9RbFpHxu%2BhURl835IqsKtIECDMQABoMMTg3MDE3MTUwOTg2IgwD9dkHYAH9EPd0jisqrwQBjzkblrVCc7Rp%2FZxzkYVrPOp3Oh6mMx3hjjVTDI%2Brb5faGq%2BAJVLPHnx7FRUCSye7oKpprAvkcuyo9ek51xDIRj0PYXmURqBTPxDfofSD6tyEuyo6LxFq6I0q8Star0R5FbDiIkXEos%2FhnXbLyYs%2BoH4POZPvbybMTRZ8FNXDV%2B%2FMgcoQjbBnx2kRpapYmT55e4c1A2mjtEfzZyp9FBqwULRQtxbMvgLIUi9tCJSyFuTwwzBbBkZQz9qfDp7FzIIvT%2BY7hIwcNSx7TLhbXpxVHLeZoW8VHJ9VVC1l4BJyDnC8ldMmpa48u1fnlmpJjXbmq7j5TwmuLtQLZgS5O0SdJHsDO9g93VSnGVxJt47prll1aOUNAGBzVCETkbVzuMDStM4ru%2F9CAjxU4U8DRz6blnH5%2FEQ2OhvRc3pSBnT7fsdcA%2FI%2F6hTPq%2F22eQAurE91%2BGJ%2FdEpTsajFk8aKPVFb5i%2BBdpbsETFACjSu9jOS0pdTqjgUwGKl91prg6q2JyGbTyE09AbNKsf7k0GogwHnwrWGQ1E1TfbJiCBP7wEgV5Ji%2FHaOqJiStSEKpmcAV7zbUqjxpta56xeMW9sCgPUEmmYBmGqpS7mgT6gE%2BZWuPIvsBbso2x33ivlI5Dr8Cu3rKXvRE3x7iwYVyy3vHRa5wX1i5XDpg%2Fl8wI%2B8tc%2ByaVM5EOVrdaQ0fP5LzQ03wvB%2BpDTjTcUunIQ%2FQrGRRgG%2B04m6wFaK%2BqGwGWYe%2B3xXMNq7ypcGOqgBd3dC4PReoUBsWEZtQgyrpsJ1ugGU2zk2H093Lpj5uYVw0P162A6yKKy99LjBbZ4WevhVPKmcqRerzzW8e5MDo%2F4OCib11xo3Q6zQ5BVRBjAaLW287Cg%2FPZ8qXWGccjyW%2FbXOS4XMoGidqL%2Fbo7A7jn2Pk7%2B%2FOZfmHSdaB4wIGI%2BbZP%2FPkswympWLUSJ%2F%2B9PE9gQVReVM1338y4GVeyPZPJwsaVGo0P5b&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220809T190600Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDSKXKFNZ%2F20220809%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e3487574a716f53dd4c5d245b881dd9759499c76d569ff9e1ec430fadc00d3e2",
#     url= "http://glutenfreegirl.com/2007/11/gratitude-and-sweet-rice-pudding/"
#     )
#     R1.save()
#     user1 = User.objects.get(id = 1)
#     user2 = User.objects.get(id = 2)
#     R1.user.add(user1, user2)
#     print(R1.user.all())
#     return JsonResponse({"user":R1.user.all()})
    


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
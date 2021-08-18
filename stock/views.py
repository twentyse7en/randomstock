from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .utils import get_price
# Create your views here.

def index(request):
    return HttpResponse('Abijith B [abijithbahuleyan@gmail.com]')

def random(request):
    stock = {
            'quote': 'SBIN',
            'lastPrice': 423.1,
            'pChange': 12
        }

    data = get_price('M&M')
    return JsonResponse(data)

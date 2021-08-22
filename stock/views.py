from random import randrange

from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.parsers import JSONParser
from stock.models import Stock
from stock.serializers import StockSerializer
#  from .utils import get_price
# Create your views here.

def index(request):
    return HttpResponse('Abijith B [abijithbahuleyan@gmail.com]')

def random(request):
    """
    Retrieve a random stock
    """
    stock = {
            "quote": 'SBIN',
            "lastPrice": 423.1,
            "pChange": 12
        }
    try:
        index = randrange(100, 110)
        print(index)
        stock_data = Stock.objects.get(id=index)
    except Stock.DoesNotExist:
        return HttpResponse(status=404)

    serializer = StockSerializer(stock_data)
    return JsonResponse(serializer.data)

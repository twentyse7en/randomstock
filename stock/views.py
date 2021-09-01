from random import randrange

from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.parsers import JSONParser
from stock.models import Stock
from stock.serializers import StockSerializer
#  from .utils import get_price
# Create your views here.

def get_random_stock(request):
    """
    Retrieve a random stock
    """
    try:
        # TODO better implementation
        # rough range
        index = randrange(0, 3000)
        stock_data = Stock.objects.get(id=index)
    except Stock.DoesNotExist:
        return HttpResponse(status=404)

    serializer = StockSerializer(stock_data)
    return JsonResponse(serializer.data)

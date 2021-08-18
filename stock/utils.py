import json

import requests

USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) '\
              'AppleWebKit/537.36 (KHTML, like Gecko) '\
              'Chrome/79.0.3945.130 Safari/537.36'

BASE_URL = 'https://www.nseindia.com/'

session = requests.Session()
session.headers['User-Agent'] = USER_AGENT
r = session.get(BASE_URL)


def get_price(ticker):
    session.headers['referer'] = f'{BASE_URL}get-quotes/equity?symbol={ticker}'
    payload = {'symbol': ticker}
    data = session.get(f'{BASE_URL}api/quote-equity', params=payload)
    data = data.text.strip()
    return json.loads(data)

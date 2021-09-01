import os
import datetime
from urllib import request
from urllib.error import URLError
from io import BytesIO
from zipfile import ZipFile
import logging

import pandas as pd
import psycopg2
from psycopg2 import OperationalError

logging.basicConfig(filename='downloader.log', level=logging.INFO)

def download_zip(url):
    logging.info(f'trying to download the zip file from {url}')
    USER_AGENT = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.101 Safari/537.36"
    headers = {'User-Agent': USER_AGENT}
    req = request.Request(url, None, headers)
    resp = request.urlopen(req)
    data =  resp.read()
    logging.info('download completed')
    return data

def extract_data(zip_data):
    """ extract the bhave copy """
    zip_file = ZipFile(BytesIO(zip_data))
    file_name = zip_file.namelist()[0]
    logging.info(f'extracting the zip file {file_name}')
    csv_file = zip_file.read(file_name)
    return csv_file

def get_download_url():
    """
    download link for bhavcopy from bse
    """
    date = datetime.datetime.now()
    date = date.strftime("%d%m%y")
    url = f"https://www.bseindia.com/download/BhavCopy/Equity/EQ{date}_CSV.zip"
    return url

def clean_stock_data(raw_data):
    df = pd.read_csv(BytesIO(raw_data))
    # selecting equity only
    df = df[df["SC_TYPE"]=='Q']
    df["SC_NAME"] = df["SC_NAME"].str.strip()
    df["CHANGE"] = df['LAST'] - df['PREVCLOSE']
    df["PCHANGE"] = (df["CHANGE"]/df["PREVCLOSE"])*100
    # handle ipo
    index = df[df["PREVCLOSE"] == 0].index
    df.loc[index]["CHANGE"] = 0
    df.loc[index]["PCHANGE"] = 0
    return df

def get_bhav_copy():
    """
    download bhavcopy and return pandas dataframe object
    """
    url = get_download_url()
    zip_data = download_zip(url)
    extracted_csv = extract_data(zip_data)
    return clean_stock_data(extracted_csv)

def connect_db():
    NAME = os.getenv('DB_NAME')
    USER = os.getenv('DB_USER')
    PASSWORD = os.getenv('DB_PASSWORD')
    HOST = os.getenv('DB_HOST')
    conn = psycopg2.connect(dbname=NAME, user=USER, password=PASSWORD, host=HOST)
    return conn

def update_database(stock_data):
    conn = connect_db()
    with conn:
        with conn.cursor() as cur:
            # clear all values
            cur.execute("DELETE from stock_stock")
            for idx, row in stock_data.iterrows():
                if idx%500 == 0:
                    logging.info(f"updated {idx} rows")
                name = row["SC_NAME"]
                last_price = row["LAST"]
                change = round(row["CHANGE"], 2)
                pchange = round(row["PCHANGE"], 2)
                cur.execute("INSERT INTO stock_stock VALUES (%s, %s, %s, %s, %s)",
                            (idx, name, last_price, change, pchange))

def main():
    """
    update the db with latest bhav copy data
    """
    try:
        df = get_bhav_copy()
        update_database(df)
    except URLError as e:
        logging.error(f"Error while requesting : {e}")
    except OperationalError as e:
        logging.error(f"Error while db operations : {e}")

if __name__ == '__main__':
    main()

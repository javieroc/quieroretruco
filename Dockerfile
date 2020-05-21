FROM tiangolo/uwsgi-nginx-flask:python3.8

RUN apt-get update && apt-get install -y ca-certificates

WORKDIR /app

COPY ./app/requirements.txt ./

RUN pip install -r requirements.txt

COPY ./app ./

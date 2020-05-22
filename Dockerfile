FROM python:3.8

WORKDIR /app

RUN apt-get clean \
    && apt-get -y update

RUN apt-get -y install python3-dev

COPY ./app/requirements.txt ./

RUN pip install --no-cache-dir -r requirements.txt

COPY ./app .

CMD [ "python", "main.py" ]

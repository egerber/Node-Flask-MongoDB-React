FROM python:3.7.1

ENV FLASK_APP "/app/main.py"
ENV FLASK_ENV "development"
ENV FLASK_DEBUG True

RUN mkdir /data
RUN mkdir /app/
WORKDIR /app

RUN pip install --upgrade pip
COPY ./requirements.txt requirements.txt
RUN pip install -r requirements.txt


WORKDIR /app
EXPOSE 5000
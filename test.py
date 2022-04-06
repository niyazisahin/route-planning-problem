import pymongo
from pymongo.server_api import ServerApi
from flask import Flask, render_template, url_for, request, redirect, send_file


client = pymongo.MongoClient(
    "mongodb+srv://Charon:cufcuf@navigation.xptsq.mongodb.net/VehicleMonitor?retryWrites=true&w=majority", server_api=ServerApi('1'))
database = client["RoutePlanningProblem"]
collection = database["RoutePlanningProblem"]

app = Flask(__name__)


@app.route('/api/v1/', methods=['POST', 'GET'])
def index():
    request_json = request.get_json()
    print(request_json)
    
    try:
        user = request_json["username"]
        password = request_json["password"]
        
        return login(user, password)
    except:
        print("hatayla karşılaşıldı.")
        return "False"

@app.route('/api/v2/', methods=['POST', 'GET'])
def index2():
    request_json = request.get_json()
    print(request_json)
    
    try:
        name = request_json["name"]
        surname = request_json["surname"]
        username = request_json["username"]
        password = request_json["password"]
        location = request_json["location"]
        
        register(name, surname, username, password, location)
        return "True"
    except:
        print("hatayla karşılaşıldı.")
        return "False"


def register(name, surname, username, password, location):

    collection.insert_one(
    {"name": name, "surname": surname, "username": username, "password":password, "location": location}) 


def login(username, password):

    user = collection.find_one({"username": username, "password": password})

    if user:
        return "True"
    else:
        return "False"


if __name__ == '__main__':
    app.run(debug=True)

import pymongo
from pymongo.server_api import ServerApi
from flask import Flask, render_template, url_for, request, redirect, send_file
from bson.json_util import dumps

client = pymongo.MongoClient(
    "mongodb+srv://Charon:cufcuf@navigation.xptsq.mongodb.net/RoutePlanningProblem?retryWrites=true&w=majority", server_api=ServerApi('1'))
database = client["RoutePlanningProblem"]
collection = database["User"]
collection_admin = database["Admin"]
collection_path = database["Path"]

app = Flask(__name__)

# User giriş kontrolü
@app.route('/api/v1/', methods=['POST', 'GET'])
def index():
    request_json = request.get_json()
    print(request_json)
    
    try:
        user = request_json["username"]
        password = request_json["password"]
        
        return login(user, password, "User")
    except:
        print("hatayla karşılaşıldı.")
        return "False"

# User kayıt işlemi
@app.route('/api/v2/', methods=['POST', 'GET'])
def index2():
    request_json = request.get_json()
    print(request_json)
              
    try:          
        name = request_json["name"]                    
        surname = request_json["surname"]                    
        username = request_json["username"]                    
        password = request_json["password"]                    
        
        register(name, surname, username, password)
        return "True"
    except:
        print("hatayla karşılaşıldı.")
        return "False"


# Admin giriş kontrolü
@app.route('/api/v3/', methods=['POST', 'GET'])
def index3():
    request_json = request.get_json()
    print(request_json)
    
    try:
        user = request_json["username"]
        password = request_json["password"]
        
        return login(user, password, "Admin")
    except:
        print("hatayla karşılaşıldı.")
        return "False"

# Json aktarımı
@app.route('/api/v4/', methods=['POST', 'GET'])
def json_gonder():

    request_json = request.get_json()
    print(request_json)
    
    try:
        collection_path.insert_one({"path" : request_json})
        return "True"
    except:
        print("hatayla karşılaşıldı.")
        return "False"

# Json çekimi
@app.route('/api/v5/', methods=['POST', 'GET'])
def json_al():
    
    try:
        #json_sorted = collection_path.find().sort({'_id':-1}).limit(1)
        json_not_sorted = collection_path.find()
       
        #print(json_sorted)
        json = dumps(list(json_not_sorted)[-1])
        return json
    except:
        print("hatayla karşılaşıldı.")
        return "False"


def register(name, surname, username, password):

    collection.insert_one(
    {"name": name, "surname": surname, "username": username, "password":password}) 


def login(username, password, who):

    if who == "User":
        user = collection.find_one({"username": username, "password": password})

        if user:
            return "True"
        else:
            return "False"
            
    if who == "Admin":
        user = collection_admin.find_one({"username": username, "password": password})

        if user:
            return "True"
        else:
            return "False"
    else:
        print("Böyle bir insan tipi yok. Hatalı Giriş")


if __name__ == '__main__':
    app.run(debug=True)


from collections import namedtuple
import copy
import pprint
from random import choice, randint, seed
from collections import namedtuple
from datetime import datetime


seed(datetime.now())

NEW_BUS_COST = 50  # Yeni otobüs maliyeti (25 kapasite)
NEW_BUS_CAPACITY = 25

senaryo1 = {
    'scenario':{
        'Başiskele': 10,
        'Darıca': 19,
        'Derince': 5,
        'Dilovası': 9,
        'Gebze': 4,
        'Gölcük': 4,
        'Kandıra': 5,
        'Karamürsel': 5,
        'Kartepe': 10,
        'Körfez': 5,
        'İzmit': 15,
    },
    'users' : {
        'Test1':'Gebze',
        'Test2':'Darıca',
        'Test3':'Dilovası',
        'Test4':'Gölcük',
    }
    }


# belki aksiyonlar yapıp örnek: yeni araba al, araba 1 şuraya gitsin şu kadar kişi alsın araba 2 şuraya gitsin
Distances = {
    'Başiskele': {
        'Başiskele': 0.0,
        'Çayırova': 83.7,
        'Darıca': 80.6,
        'Derince': 33.8,
        'Dilovası': 66.1,
        'Gebze': 74.9,
        'Gölcük': 28.5,
        'Kandıra': 64.2,
        'Karamürsel': 46.5,
        'Kartepe': 24.7,
        'Körfez': 46.7,
        'İzmit': 22.7,
        "Son":33.9,
    },
    'Çayırova': {
        'Başiskele': 83.7,
        'Çayırova': 0.0,
        'Darıca': 8.3,
        'Derince': 47.3,
        'Dilovası': 22.6,
        'Gebze': 10.6,
        'Gölcük': 62.0,
        'Kandıra': 102.0,
        'Karamürsel': 43.5,
        'Kartepe': 63.2,
        'Körfez': 39.6,
        'İzmit': 57.3,
        "Son":65.6,
    },
    'Darıca': {
        'Başiskele': 84.8,
        'Çayırova': 8.2,
        'Darıca': 0.0,
        'Derince': 43.3,
        'Dilovası': 18.7,
        'Gebze': 5.7,
        'Gölcük': 58.0,
        'Kandıra': 97.6,
        'Karamürsel': 39.5,
        'Kartepe': 59.3,
        'Körfez': 35.7,
        'İzmit': 53.3,
        "Son":58.1,
    },
    'Derince': {
        'Başiskele': 32.0,
        'Çayırova': 46.2,
        'Darıca': 43.3,
        'Derince': 0.0,
        'Dilovası': 27.6,
        'Gebze': 38.2,
        'Gölcük': 25.7,
        'Kandıra': 54.9,
        'Karamürsel': 43.7,
        'Kartepe': 16.7,
        'Körfez': 9.6,
        'İzmit': 10.8,
        "Son":15.6,
    },
    'Dilovası': {
        'Başiskele': 60.2,
        'Çayırova': 21.3,
        'Darıca': 17.5,
        'Derince': 28.0,
        'Dilovası': 0.0,
        'Gebze': 12.4,
        'Gölcük': 54.0,
        'Kandıra': 98.6,
        'Karamürsel': 32.9,
        'Kartepe': 49.6,
        'Körfez': 19.9,
        'İzmit': 39.1,
        "Son":53.0,
    },
    'Gebze': {
        'Başiskele':69.5,
        'Çayırova':9.9,
        'Darıca':6.0,
        'Derince':38.3,
        'Dilovası':13.7,
        'Gebze': 0.0,
        'Gölcük':63.2,
        'Kandıra':92.6,
        'Karamürsel':34.5,
        'Kartepe':73.5,
        'Körfez':30.7,
        'İzmit':48.3,
        "Son":53.1,
    },
    'Gölcük': {
        'Başiskele':27.2,
        'Çayırova':78.8,
        'Darıca':75.6,
        'Derince':28.9,
        'Dilovası':53.0,
        'Gebze':69.9,
        'Gölcük': 0.0,
        'Kandıra':59.2,
        'Karamürsel':19.2,
        'Kartepe':21.4,
        'Körfez':38.5,
        'İzmit':16.6,
        "Son":30.5,
    },
    'Kandıra': {
        'Başiskele':65.9,
        'Çayırova':102.0,
        'Darıca':98.5,
        'Derince':54.4,
        'Dilovası':88.6,
        'Gebze':92.8,
        'Gölcük':59.4,
        'Kandıra': 0.0,
        'Karamürsel':77.4,
        'Kartepe':47.8,
        'Körfez':64.5,
        'İzmit':45.0,
        "Son":46.1,
    },
    'Karamürsel': {
        'Başiskele':45.3,
        'Çayırova':42.5,
        'Darıca':38.8,
        'Derince':57.3,
        'Dilovası':33.9,
        'Gebze':33.6,
        'Gölcük':18.5,
        'Kandıra':77.4,
        'Karamürsel': 0.0,
        'Kartepe':39.5,
        'Körfez':56.6,
        'İzmit':34.8,
        "Son":43.2,
    },
    'Kartepe': {
        'Başiskele':26.5,
        'Çayırova':80.0,
        'Darıca':65.5,
        'Derince':23.2,
        'Dilovası':51.5,
        'Gebze':60.4,
        'Gölcük':29.6,
        'Kandıra':51.8,
        'Karamürsel':47.6,
        'Kartepe': 0.0,
        'Körfez':32.8,
        'İzmit':13.8,
        "Son":23.1,
    },
    'Körfez': {
        'Başiskele':41.1,
        'Çayırova':38.2,
        'Darıca':34.4,
        'Derince':9.2,
        'Dilovası':19.4,
        'Gebze':29.2,
        'Gölcük':34.8,
        'Kandıra':64.5,
        'Karamürsel':49.5,
        'Kartepe':25.9,
        'Körfez': 0.0,
        'İzmit':19.9,
        "Son":24.7,
    },
    'İzmit': {
        'Başiskele':23.6,
        'Çayırova':57.0,
        'Darıca':53.3,
        'Derince':11.0,
        'Dilovası':39.3,
        'Gebze':48.2,
        'Gölcük':17.3,
        'Kandıra':44.6,
        'Karamürsel':35.3,
        'Kartepe':9.0,
        'Körfez':20.6,
        'İzmit': 0.0,
        "Son":8.5,
    },
}

def distance_api(city1, city2):
    return Distances[city1][city2]

Action = namedtuple('Action', ['city1', 'pickup']) # geldiği şehir, gittiği şehir, geldiği şehirden aldığı kişi sayısı

# def generate_genome(senaryo, bus_capacity: int):
#     genome = []
#     senaryo = copy.deepcopy(senaryo)
#     cities = list(senaryo.keys())

#     city1 = choice(cities)        
#     while city1 == "Son":
#         city1 = choice(cities)
        
#     flag = False
#     while not flag:

#         city2 = choice(cities)

#         pickup = randint(0, senaryo[city1] if senaryo[city1] < bus_capacity else bus_capacity)
    
#         if pickup == 0:
#                 continue

#         bus_capacity -= pickup
#         senaryo[city1] -= pickup

#         assert bus_capacity >= 0

#         if (bus_capacity == 0) or (city2 == "Son"):
#             city2 = "Son"
#             flag = True

#         genome.append(Action(city1, city2, pickup))
#         city1 = city2

    
#     return genome

# pprint.pprint(generate_genome(senaryo1, 25))

class DNA:
    def __init__(self, senaryo: dict, BASE_COST, buses, passenger_count) -> None:
        self.genome = []  # length burada gidilecek durak sayısı
        self.unfitness= 0
        self.base_unfitness = BASE_COST # Sabit maliyet (ör: yeni bir otobüs alınırsa sabit 50 maliyet)
        self.senaryo = copy.deepcopy(senaryo)
        self.PASSENGER_COUNT = passenger_count
        # Default Genomeları oluştur
        for capacity in buses:
            self.genome.append(self.generate_genome(capacity))

    def calculate_unfitness(self) -> None:
        uf = 0 # unfitness
        pc = 0 # current passenger count
        for route in self.genome:
            m = len(route)
            for i in range(m):
                action = route[i]
                uf += distance_api(action.city1, "Son" if i == m-1 else route[i+1].city1)
                pc += action.pickup

        self.unfitness = self.base_unfitness + uf + ((self.PASSENGER_COUNT - pc) * 15)

    def generate_genome(self, bus_capacity: int):
        genome = []
        senaryo = self.senaryo
        cities = list(senaryo.keys())
        city1 = choice(cities)
        while city1 == "Son":
            city1 = choice(cities)
    
        flag = False
        while not flag:
            
            city2 = choice(cities)
            pickup = senaryo[city1] if senaryo[city1] < bus_capacity else bus_capacity
            
            if pickup == 0:
                continue

            bus_capacity -= pickup
            senaryo[city1] -= pickup
            
            if senaryo[city1] == 0:
                senaryo.pop(city1)
                cities.remove(city1)

                if not cities and not senaryo:
                    city2 = "Son"
            
                while city2 == city1:
                    city2 = choice(cities)
            
            assert bus_capacity >= 0

            if (bus_capacity == 0) or (city2 == "Son"):
                city2 = "Son"
                flag = True

            genome.append(Action(city1, pickup))
            city1 = city2

        
        # for index, action in enumerate(genome):
        #     if action.city1 == action.city2:
        #         before = genome[index-1]
        #         new = Action(before.city1, before.city2, before.pickup + action.pickup)
        #         genome.insert(index-1,new)
        #         genome.remove(before)
        #         genome.remove(action)

        return genome

    def print_information(self):
        self.calculate_unfitness()
        print("-"*50)
        print(f"Unfitness:{self.unfitness}")
        for route in self.genome:
            print("-" * 50)
            for action in route:
                print(f"{action.city1}:{action.pickup}")

    def crossover(self) -> None:
        raise NotImplementedError

    def mutate(self) -> None:
        
        choices = ["swap", "nothing"]
        random_choice = choice(choices)
        if random_choice != "nothing":
            func = getattr(self, random_choice)
            func()

    def swap(self) -> None:
        index = randint(0, len(self.genome)-1)
        c = self.genome[index]
        len_c = len(c) - 1
        indexA = randint(0, len_c)
        indexB = randint(0, len_c)

        c[indexA], c[indexB] = c[indexB], c[indexA]

        assert c[indexA] == self.genome[index][indexA]
    
    def turn_to_json(self) -> dict:
        result = {f"bus{i}":{f"step{j}":{'route':route.city1, 'pickup':route.pickup} for j,route in enumerate(bus + [Action("Son", 0)])} for i,bus in enumerate(self.genome)}
        result['Maliyet'] = self.unfitness
        return result
## ------------------------------------------------ Brute force testi 5 milyonda en iyi unfitness 489 du -----------------------------

# result = DNA(senaryo1)

# # result.calculate_unfitness()
# # count = 500
# # for i in range(count):
# #     test = DNA(senaryo1)
# #     test.calculate_unfitness()
# #     if i % 1000 == 0:
# #         print(f"%{i/count*100}")
# #     if test.unfitness < result.unfitness:
# #         result = test

# result.print_information()

class Population:
    def __init__(self, count, senaryo) -> None:
        CURRENT_SENARYO = senaryo
        owned_buses = [25, 30, 40]  # Güncel otobüsler ve yolcu sayıları
        buses = []
        BASE_COST = 0

        # Eğer yolcu sayısı kapasiteden fazla ise otomatik servis alınır
        PASSENGER_COUNT = sum(CURRENT_SENARYO.values())
        while sum(buses) < PASSENGER_COUNT:
            
            if(len(owned_buses) > 0):
                buses.append(owned_buses.pop())
            else:
                buses.append(NEW_BUS_CAPACITY)
                BASE_COST += NEW_BUS_COST

        print(buses)
        self.population = []
        self.best = None
        self.overall_best = None
        for _ in range(count):
            self.population.append(DNA(CURRENT_SENARYO, BASE_COST, buses, PASSENGER_COUNT))

        self.population_size = count
        
    def calculate_unfitness(self):
        for dna in self.population:
            dna.calculate_unfitness()
        self.order_population()

    def crossover(self) -> None:
        raise NotImplementedError

    def order_population(self) -> None:
        self.population.sort(key=lambda x: x.unfitness)
        self.best = self.population[0]

        if self.overall_best is None:
            self.overall_best = self.best
        
        if self.overall_best.unfitness > self.best.unfitness:
            self.overall_best = self.best

    def repopulate(self, survival_rate=0.1):
        best_population = [self.population[i] for i in range(int(self.population_size * survival_rate))]
        new_population = []
        for p in best_population:
            for _ in range(10):
                p.mutate()
                new_population.append(copy.deepcopy(p))
        self.population = new_population

    def loop(self, count):
        for i in range(count):
            if i%100 == 0:
                print(f"%{i/count*100}")

            self.calculate_unfitness()
            self.repopulate()
    
    def get_best(self) -> DNA:
        if self.overall_best is None:
            self.order_population()
            return self.overall_best
        else:
            return self.overall_best

def solve(senaryo:dict):

    users = senaryo['users']
    senaryo = senaryo['scenario']

    for v in users.values():
         senaryo[v] += 1

    senaryo = {k: v for k, v in senaryo.items() if v!=0}


    p = Population(500, senaryo)
    p.get_best().print_information()
    p.loop(100)
    p.get_best().print_information()
    pprint.pprint(p.get_best().turn_to_json())
    return p.get_best()


import flask
from flask import request, jsonify

app = flask.Flask(__name__)
app.config["DEBUG"] = True

@app.route('/api/v1/route', methods=['GET','POST'])
def route_api():
    
    senaryo = request.get_json(force=True)
    users = senaryo['users']
    sonuc = solve(senaryo).turn_to_json()
    sonuc['users'] = {}

    for k,v in users.items():
        for k2,v2 in sonuc.items():
            if "bus" in k2:
                for _,v3 in v2.items():
                    if v == v3['route']:
                        sonuc['users'][k] = k2
                        
    
    return jsonify(sonuc)

if __name__ == '__main__':
    app.run(port=1234)
    
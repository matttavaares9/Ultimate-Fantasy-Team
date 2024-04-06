import requests
from pymongo import MongoClient
from bson import ObjectId

"""
---------------
MONGO DB
---------------

username: matttavares9
password: WP6fRmKKrNzZ83uh
IP Address: 129.161.88.153

"""
connection = "mongodb+srv://matttavares9:WP6fRmKKrNzZ83uh@ultimatefantasyteam.noh1wbe.mongodb.net/?retryWrites=true&w=majority&appName=UltimateFantasyTeam"
client = MongoClient(connection)
db = client["sample_mflix"]
collection = db["comments"]
object_id = ObjectId("5a9427648b0beebeb69579f5")
document = collection.find_one({"_id": object_id})

if document:
    # Print the document
    print(document)
else:
    print("Document with specified _id not found.")
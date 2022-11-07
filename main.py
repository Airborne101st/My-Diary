from flask import Flask, render_template, request
from elasticsearch import Elasticsearch
from flask_cors import CORS
from flask_restful import Resource, Api
import json
from datetime import datetime

app = Flask(__name__)
api = Api(app)
CORS(app)

es = Elasticsearch(['http://localhost:9200'])

notes = []


class AddNote(Resource):
    def post(self):
        body = request.get_json()
        try:
            resp = es.index(index="test", document=body)
        except:
            resp = {"status": "Database error, Note could not be added"}
        return {"Status": resp['result']}


class GetNote(Resource):
    def get(self, id):
        try:
            resp = es.get(index="test", id=id)
        except:
            resp = {"Error": "Invalid ID"}
        return resp


class GetAllNotes(Resource):
    def get(self):
        try:
            resp = es.search(index="test", doc_type='_doc', body={
                'query': {
                    "match_all" : {}
                }
            })
            notes = resp["hits"]["hits"]
        except:
            resp = {"Error": "No data"}

        return notes




class UpdateNote(Resource):
    def put(self, id):
        body = request.get_json()
        # try:
        resp = es.update(index="test", doc_type="_doc",  id=id, body=body)
        # except:
        #     resp = {"Error": "Invalid ID"}
        return resp


class DeleteNote(Resource):
    def delete(self, id):
        try:
            resp = es.delete(index="test", id=id)
        except:
            resp = {"Error": "Invalid ID"}
        return {"Status": resp['result']}


class SearchNote(Resource):
    def get(self):
        try:
            word = request.get_json()
            resp = es.search(index="test", query={'fuzzy': {"content": word["word"]}})
        except:
            resp = {"Error": "Database error"}
        return resp["hits"]["hits"]



api.add_resource(AddNote, '/add')
api.add_resource(DeleteNote, "/delete/<id>")
api.add_resource(GetNote, "/get/<id>")
api.add_resource(GetAllNotes, "/getall")
api.add_resource(UpdateNote, "/update/<id>")
api.add_resource(SearchNote, "/search")

if __name__ == "__main__":
    app.run(debug=True)

from flask import Flask, render_template, request
from elasticsearch import Elasticsearch


app = Flask(__name__)
es = Elasticsearch(['http://localhost:9200'])


@app.route("/")
def home_page():
    return render_template("index.html")

@app.route("/page")
def write_note():
    return render_template("page.html")


@app.route("/page", methods=["GET", "POST"])
def save_note():
    if request.method == "POST":
        title = request.form.get("title")
        content = request.form.get("content")

        doc = {
            "title": title,
            "content": content
        }

        resp = es.index(index="entries",  document=doc)

    return resp['result']


@app.route("/getsome")
def get_notes():
    resp = es.get(index="entries", id=1234)
    return resp['_source']



@app.route("/find")
def findit():
    resp = es.search(index="entries", query={"fuzzy": {"content": "dancing"}})
    return resp["hits"]["hits"][0]['_source']['content']


# @app.route("/records")
# def get_records():
#     es.get(index="entries",  )






if __name__ == "__main__":
    app.run(debug=True)
from flask import Flask, render_template, request
from elasticsearch import Elasticsearch
import note

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

        data_doc = {
            "Title": title,
            "Content": content
        }

        es.index(index="entries", document=data_doc)

    return "saved"


# @app.route("/records")
# def get_records():
#     es.get(index="entries",  )






if __name__ == "__main__":
    app.run(debug=True)
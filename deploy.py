from flask import Flask, render_template, url_for, request, redirect
import twittercomments
app = Flask(__name__)

@app.route("/", methods = ["GET","POST"])
def home():
    return render_template("index.html")


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(debug=True, port=port)

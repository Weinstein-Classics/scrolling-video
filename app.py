from flask import Flask, render_template
import flask
app = Flask(__name__, static_url_path='/static')

@app.route('/static/<path:path>')
def send_static(path):
    return send_from_directory('/static', path)

# root url route
@app.route("/")
def root_page():
  return render_template("root.html")

if __name__ == "__main__":
  app.run()

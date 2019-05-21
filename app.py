from flask import Flask
import flask
app = Flask(__name__, static_url_path='')

@app.route("/vid.mp4")
def vid():
  return flask.url_for('static', filename='officer.mp4')

# root url route
@app.route("/")
def root_page():
  return """<!DOCTYPE html>

<html>

  <head>
  	<meta content="width=device-width, inital-scale=1.0"/>
	<link rel="stylesheet" href="main.css"/>
  </head>


  <body id="main">
  	<section class="container">
  		<div class="content">
  			<h1>Scroll pls</h1>
  			<p1>start</p1>
  		</div>
  	</section>

    <video id="vid" tabindex="0" autobuffer preload width="100%" style="top:0; left:0; position:fixed">
      <source src="vid.mp4" type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'/>
    </video>

    <div id="buffer" height="9999" width="100%" style="margin-top:9999px">hello world</div>



  </body>




</html>"""

#app.send_static_file('index.html')

"""
  <video id="vid" width="100%" style="top:0; left:0; position:fixed">
    <source src="officer.mp4" type="video/mp4"/>
  </video>
  
  
  """
  
if __name__ == "__main__":
  app.run()
    

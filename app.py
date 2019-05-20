from flask import Flask
app = Flask(__name__)

# root url route
@app.route("/")
def root_page():
  return """
  <video id="vid" width="100%" style="top:0; left:0; position:fixed">
    <source src="officer.mp4" type="video/mp4"/>
  </video>
  
  
  """
  
if __name__ == "__main__":
  app.run()
    

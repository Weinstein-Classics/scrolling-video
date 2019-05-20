from flask import Flask
app = Flask(__name__)

# root url route
@app.route("/")
def root_page():
  return """
  <video >
    <source src="officer.mp4"/>
  </video>
  
  
  """
  
if __name__ == "__main__":
  app.run()
    

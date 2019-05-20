from Flask import Flask
app = Flask(__name__)

# root url route
@app.rounte("/")
def root_page():
  return "Home Pange"
  
if __name__ == "__main__":
  app.run()
    

# FLASK Cheat Sheet #

from flask import Flask, render_template

# create the application object
app = Flask(__name__)

# .route method to handle requests (GET, POST, PUSH, DELETE)
# multiple routes can be assigned the same function!
@app.route('/')     
@app.route('/home')
def home():
    return '<h1>Hello, World!</h1>'

# passing urls variables with converter:
@app.route('/reporter/<int:reporter_id>')
def reporter(reporter_id):
    return f'''
            <h2>Reporter {reporter_id} Bio</h2> 
            <a href="/">Return to home page</a>
            '''

# try requesting '/article/ten-ducks-go-to-local-pond'
@app.route('/article/<article_name>')
def article(article_name):
  article_name = article_name.replace("-"," ").title()
  return f'''
  <h2>{article_name}</h2>
  <a href="/">Return back to home page</a>
    '''

# return html pages ('templates')
# first html variable, then flask variable
@app.route("/recipe/<int:id>")
def recipe(id):
  recipes = {1: "fried egg", 2: "buttered toast"}
  descriptions = {1: 'Egg fried in butter', 2: 'Toasted bread spread with butter'}
  return render_template("recipe.html", template_recipe=recipes[id], template_description=descriptions[id])

if __name__ == '__main__':
  app.run(host="127.0.0.1", port=8080, debug=True)


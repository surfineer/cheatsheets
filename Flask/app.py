# render_template to render html pages
# request to handle form submission (POST requests)
# redirect and url_for for redirecting after form submission
from flask import Flask, render_template, request, redirect, url_for
# flaskform for the formclass, object will be rendered together with template
from flask_wtf import FlaskForm
# from wtforms for respective input types needed
from wtforms import StringField, SubmitField
# for data validation
from wtforms.validators import DataRequired
from helper import recipes, descriptions, ingredients, instructions, comments, add_ingredients, add_instructions

app = Flask(__name__)
app.config["SECRET_KEY"] = "mysecret" #CSRF protection

# in general -> best practice to move all FlaskForms to separate file
# instantialize the form class and assign the attributes (fields)
# possible fields are: TextAreaField, BooleanField, RadioField, 
class CommentForm(FlaskForm):
  comment = StringField("Comment", validators=[DataRequired()]) #this makes the field 'required' -> cannot submit empty
  submit = SubmitField("Add Comment") #"Add Comment" will be the label in the form / button
# the class will then be used as object in the desired route and passed with render_template

@app.route("/", methods=["GET", "POST"])
def index():
  new_id = len(recipes) + 1
  if len(request.form) > 0:
    ## request.form[] takes in the name attribute from the form element
    # request.form is a dictionary with name:value pairs!
    recipes[new_id] = request.form["recipe"]
    descriptions[new_id] = request.form["description"]
    new_ingredients = request.form["ingredients"]
    new_instructions = request.form["instructions"]
    add_ingredients(new_id, new_ingredients)
    add_instructions(new_id, new_instructions)
  return render_template("index.html", template_recipes=recipes)

@app.route("/recipe/<int:id>", methods=["GET", "POST"])
def recipe(id):
  comment_form = CommentForm()
  # accessing the submitted data for the form attribute and storing it
  if comment_form.validate_on_submit(): # returns True when there is a POST request and all data validators are satisfied
    new_comment = comment_form.comment.data
    comments[id].append(new_comment)
  return render_template("recipe.html", template_recipe=recipes[id], template_description=descriptions[id], template_ingredients=ingredients[id], template_instructions=instructions[id], template_comments=comments[id], template_form=comment_form) # by default, render_template looks in the 'templates/' directory for htmls to render

if __name__ == '__main__':
  app.run(host="127.0.0.1", port=8080, debug=True)

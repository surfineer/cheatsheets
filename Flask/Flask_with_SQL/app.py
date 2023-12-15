from flask import render_template, request, url_for, redirect
from models import db, Reader, Book, Review, Annotation
from app import app, db
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

# database configuration
app = Flask(__name__)  # application instance
# path to database and its name
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///demo.db'
# to supress warning a change is about to be made in the database
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)  # creates an SQLAlchemy (database) object and connect it with the app

@app.route('/')
@app.route('/home')
def home():
  books = Book.query.all()
  return render_template('home.html', books=books)

@app.route('/profile/<int:user_id>')
def profile(user_id):
   reader = Reader.query.filter_by(id=user_id).first_or_404(description="There is no user with this ID.")
   # .first_or_404() returns page not found when reader not found
   return render_template('profile.html', reader=reader)

@app.route('/books/<year>')
def books(year):
   books = Book.query.filter_by(year=year) # eg. year = 2019
   return render_template('display_books.html', year=year, books=books)


@app.route('/reviews/<int:review_id>')
def reviews(review_id):
   review = Review.query.filter_by(id = review_id).all()
   return render_template('_review.html', review = review)




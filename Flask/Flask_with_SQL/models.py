from app import db, app

#declaring the Book model (= making a table as object)
class Book(db.Model):
    id = db.Column(db.Integer, primary_key = True) #primary key column, automatically generated IDs
    title = db.Column(db.String(80), index = True, unique = True) # String(max. characters), index = True makes the column searchable by its values
    author_first_name = db.Column(db.String(50), index = True, unique = False)
    author_surname = db.Column(db.String(80), index = True, unique = False)
    month = db.Column(db.String(20), index = True, unique = False)
    year = db.Column(db.Integer, index = True, unique = False)
    # declare One-to-Many Relationship on the One
    reviews = db.relationship('Review', backref='book', lazy='dynamic', cascade='all, delete, delete-orphan') 
    # 'Review' is the model/class on the 'many' side, 
    # backref creates a .book attribute (primary key to foreign key relationship) in the review model to refer back to this Book object
    # lazy makes related objects load as SQLAlchemy query objects
    # cascade enables cascading deletion, when relationship is removed, all relations will be deleted (eg. a Book is removed and all reviews for that book will also go)
    # when a review is deleted, there is no impact on Reader or Book, so no cascade function required there

    def __repr__(self):
        return f"'{self.title}' by {self.author_first_name} {self.author_surname} in: {self.month},{self.year}"

#creating another table (model)
class Reader(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    first_name = db.Column(db.String(50), index = True, unique = False)
    surname = db.Column(db.String(80), index = True, unique = False)
    email = db.Column(db.String(120), index = True, unique = True)
    reviews = db.relationship('Review', backref='reviewer', lazy='dynamic', cascade='all, delete, delete-orphan')
    # the Review class/model will have access to the Reader.attributes through the backref value of 'reviewer' = eg. reviewer.surname or when reviewer is called the __repr__ method of Reader will be called!
    
    def __repr__(self):
        return "Reader ID: {}, email: {}".format(self.id, self.email)

#declaring the Review model / table database
class Review(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    stars = db.Column(db.Integer, unique = False)
    text = db.Column(db.String(200), unique = False)
    #establising the Many-to-One relationships
    #here below is the foreign key column (book_id) linking to the primary key (Book.id) of the Book model (book). Note the lower case here: 'BookCase.id' becomes 'bookCase.id'
    book_id = db.Column(db.Integer, db.ForeignKey('book.id'))
    reviewer_id = db.Column(db.Integer, db.ForeignKey('reader.id')) #referencing to the Reader class .primarykey(=.id)

    def __repr__(self):
        return f"Review: {self.text}\tStars: {self.stars}"
    
# ~ ~ ~ ~ ~ ~ ~ 
# Querying a database table with Flask SQLAlchemy is done through the query property of the Model class.

# Table.query.all() or .query.get(oneID)

# query all the readers from the Reader model
readers = Reader.query.all()
[print(reader.email) for reader in readers]
#same
for reader in readers:
    print(reader.name)
# query an entry with the id = 123 and assign it to a variable to access all attributes
reader = Reader.query.get(342)
print(reader.name)

# query many related objects, eg. one Reader can have many reviews written
# Table.query.get(oneID).RelationshipVariable.all() or .get(oneID)

# FETCHING ONE TO MANY RELATIONSHIPS (all)
reader = Reader.query.get(765)
reviews_765 = reader.reviews.all() #reviews is the db.Relationship() attribute of Reader!
# shortcut (chaining)
reviews_123 = Reader.query.get(123).reviews.all() # this fetches all reviews made by ReaderID=123
#returns a list! This can be looped through:
[print(review.id) for review in reviews_123]
# fetching one object, eg. a Review can only have one author
# FETCHING MANY TO ONE RELATIONSHIPS (get)
review = Review.query.get(435)
reviewer_435 = review.reviewer # this uses the backref value 'reviewer' to access the Reader Class attributes, this connection is set up in the db.Relationship attribute in the Reader class
print(reviewer_435) # this will print the __repr__ of the class
print(reviewer_435.surname) #this will print the surname attribute of the reader who is associated with this review
# shortcut (chaining)
reviewer_111 = Review.query.get(111).reviewer

# ~ ~ ~ ~ ~ ~ ~
# Filtering a database table using .filter() -> returns a query object to be further refined

# select books from the year 2020 -> returns a list (query object)
books_2020 = Book.query.filter(Book.year == 2020).all() # .all() returns all filtered
print("All the suggested books in the year 2020:")
[print(book) for book in books_2020]
# .all()
Book.query.filter(Book.year == 2020).first() # .first() returns only one result
Book.query.filter(Book.year == 2020).count() # .count() counts all of filtered entries
Book.query.filter(Book.year == 2020).first_or_404(description="There is no user with this ID.") # will return description if no entry found

# filter_by()
Book.query.filter_by(year=2020).all()
Book.query.filter_by(id=int(533)).first()

# filtering for mutliple conditions using " , " (AND)
Review.query.filter(Review.stars <= 3, Review.book_id == 1).all()

# filter with .endswith()
gmail = Reader.query.filter(Reader.email.endswith('gmail.com')).all() # filters for emails ending in gmail.com

# filter with .like() and wildcard characters % _ 
emails = Reader.query.filter(Reader.email.like('%.%@%')).all() # filters for all emails that contain a dot before the @ symbol

# ORDER BY querying
ordered_books = Book.query.order_by(Book.year).all() # ascending is default
ordered_books = Book.query.order_by(Book.year.desc()).all() # in descending order

# this is necessary to initialize the databases -> run python app.py


def create_database(app):
    with app.app_context():
        db.create_all()

if __name__ == "__main__":
    # create_database(app)
    app.run(debug=True)

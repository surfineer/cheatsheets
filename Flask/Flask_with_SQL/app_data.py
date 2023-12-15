# import the models / tables from our app.py
from app import app, db
from models import Reader, Book, Review
# thanks to ORM, creating database entries is the same as creating Python objects.
# adding rows to the tables is done by instantiating objects from the models

b1 = Book(id=123, title='Demian', author_first_name='Hermann',
          author_surname='Hesse', month='February', year=2020)
b2 = Book(id=533, title='The Stranger', author_first_name='Albert',
          author_surname='Camus', month='April', year=2019)
r1 = Reader(id=342, first_name='Ann', surname='Ralph',
            email='ann.ralph@example.com')
r2 = Reader(id=765, first_name='Sam', surname='Adams',
            email='sam.adams@example.com')

# accessing the table information is done in the same way as accessing Python object attributes
print('My first reader:',r1.first_name)
print(b2.author_first_name + b2.author_surname)
print(len(r2.email))

# creating objects / entries with foreign key references
rev1 = Review(id=435, stars=5, text='This book is amazing...', book_id=b1.id, reviewer_id=r1.id)
rev2 = Review(id=450, stars=2, text='This book is difficult!',
              book_id=b2.id, reviewer_id=r2.id)
print(rev1)  # prints the rev1 object
print(rev1.text)  # prints the text of the review rev1
print(rev1.book_id)  # prints the id of the book for which the review was written


## DATA BASE TRANSACTIONS
# => adding to, deleting from or updating the data base
# a database SESSION contains one or more transactions
# an entry is ADDED to the session
# the act of COMMITING ends a transaction by saving the transactions permanently to the database
# in contrast, ROLLBACK rejects the pending transactions and changes are not permanently saved in the database.

# adding the objects to the database by running the below commands
def add_to_database(app,db,entry): #entry would be eg. rev1
    with app.app_context():
        db.session.add(entry)
        try:
            db.session.commit()
            print("Commit succeded.", entry, "added to the database permanently. The exception was not raised.\n")
        except Exception as ex:
            print("The commit of", entry,"didn't succeed. Duplicate primary key values. We will empty the current session.\n")
            print("The error is the following:", ex)
            db.session.rollback() #this will trigger if for example an entry has the same email address, which is specified as a UNIQUE data entry column

# updating an entry in the database
reader = Reader.query.get(3)
reader.email = "new_email@example.com"
#then session.commit again or session.rollback to undo the changes!

# deleting an entry in the database
db.session.delete(Reader.query.get(753)) #deleting reader with id=753
# no session.commit() is required for deleting!

if __name__ == "__main__":
    # add_to_database(app,db,b1)
    # add_to_database(app, db, b2)
    # add_to_database(app, db, r1)
    # add_to_database(app, db, r2)
    app.run(debug=True)

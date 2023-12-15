class Student:
    def __init__(self,name,year):                     # constructor method
        self.name = name
        self.year = year
        self.grades = []
        self.attendance = {}

    def __repr__(self):                             # string representation of class (when print is called on object)
        return f"Student Name: {self.name}\nStudent Year: {self.year}\nGrades and Attendance log"

    def mark_attendance(self, date, attendance):      # class methods
        self.attendance[date] = attendance
        return self.attendance

    def add_grade(self, grade):
        if type(grade) is Grade:
            self.grades.append(grade)
        else:
            return None
        
    def get_average(self):
        if self.grades != []:
            total = sum(grade.score for grade in self.grades)
            average = total / len(self.grades)
            return int(average)
        else:
            return None

class Grade:
    minimum_passing = 65                          # class variables (attributes)
    def __init__(self, score):
        self.score = score                          # instance variables (attributes)
    
    def is_passing(self):
        if self.score >= Grade.minimum_passing:
            return True
        else:
            return False


# Instantiating (Creating Objects)

roger = Student("Roger van der Weyden", 10)
sandro = Student("Sandro Botticelli", 12)
pieter = Student("Pieter Bruegel the Elder", 8)
grade_pieter=Grade(100)

# Calling Object Methods (Functionalities)

pieter.add_grade(Grade(100))
pieter.add_grade(Grade(78))

sandro.mark_attendance("13-NOV",False)
roger.mark_attendance("22-OCT", True)
roger.mark_attendance("21-OCT", False)

# Printing results

print(pieter)
print(grade_pieter.is_passing())
print(pieter.get_average())
print(sandro.attendance)
print(roger.attendance)

# Helpful methods on Classes / Objects

print(type(Student))                            #prints the name of the class
print(dir(Student))                             #print all attributes and methods of an object/class
print(hasattr(Grade,"minimum_passing"))         #checks if attribute is in object/class
print(getattr(Student,"name","Student Name"))   #gets attribute from object/class, if none -> returns default value (3rd argument)
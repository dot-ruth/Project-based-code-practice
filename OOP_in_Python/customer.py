# inheritance
class User:
    def log(self):
        print(self)

# Polymorphism
# same log method but different implementation


class Teacher:
    def log(self):
        print("I'm a teacher")


# Customer(User) == Customer extends User
class Customer(User):
    def __init__(self, name, membership_type):
        self.name = name
        self.membership_type = membership_type

    # changing an attribute into a property
    # creating a setter and a getter for the "name" property
    # getter
    @property
    def name(self):
        # the underscore prefix is to declare that the property is private
        return self._name

    # setter
    @name.setter
    def name(self, name):
        self._name = name

    def update_membership(self, new_membership):
        self.membership_type = new_membership

    # Static
    def read_data():
        print("Reading data")

    # Str method
    def __str__(self):
        print("Converting to string")
        return self.name + " " + self.membership_type

    def print_all(customers):
        for customer in customers:
            print(customer)


# c = Customer("Ruth","gold")
# print(c.name,c.membership_type)

# c2 = Customer("b","Gold")
# print(c2.name,c2.membership_type)
# saving the objects created in a list DS
customers = [Customer("Ruth", "Bronze"), Customer("b", "Gold")]
# print(customers[0].membership_type)
# customers[0].update_membership("Gold")
# print(customers[0].membership_type)

# Customer.read_data()

# print(customers[1])

Customer.print_all(customers)

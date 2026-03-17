class Vehicle:
    def __init__(self, model, engine, mileage):
        self.model = model
        self.engine = engine
        self.mileage = mileage
    def drive(self, km):
        km = int(input())
        self.mileage += km
        print(f"You drove {km} km!")
    def checkEngine(self):
        print(self.engine)
    def __str__(self, model, engine, mileage):
        print(f"Model: {self.model}, engine: {self.engine}, mileage: {self.mileage}")

class Nissan_GTR(Vehicle):
    def __init__(self, model, engine, mileage, coolcar=True):
        super().__init__(model, engine, mileage)
        self.coolcar = coolcar
    """Overriding"""
    def drive(self, km):
        self.mileage += km
        print("I feel like Paul Walker, you drove: {self.mileage}")
    def checkEngine(self):
        print(f"{self.engine} goes vroom vroom")
    def __str__(self):
        return f"Model: {self.model}, engine: {self.engine}, mileage: {self.mileage}, coolcar : {self.coolcar}"

class Zhiguli(Vehicle):
    def __init__(self, model, engine, mileage, isalive=True):
        super().__init__(model, engine, mileage)
        self.isalive = isalive
    """Overriding"""
    def drive(self, km):
        if not self.isalive:
            print("Your piece of garbage died!")
        else:
            self.mileage += km
            print(f"Your piece of garbage somehow lasted {self.mileage}")
            self.isalive = False
        
    def __str__(self):
        return f"Model: {self.model}, engine: {self.engine}, mileage: {self.mileage}, isalive: {self.isalive}"
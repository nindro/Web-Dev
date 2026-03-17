Vehicle Management System (OOP Lab)
A Python-based project demonstrating Core Object-Oriented Programming (OOP) concepts. This project models a vehicle hierarchy, including specific implementations for a high-performance sports car and a classic "vintage" car.

    Features & OOP Concepts Applied
1. Inheritance
Base Class: Vehicle (located in models.py) provides the foundation with attributes like model, engine, and mileage.

Child Classes: Nissan_GTR and Zhiguli inherit from Vehicle, reusing its logic while adding unique traits.

2. Polymorphism & Overriding
Each class implements its own version of the drive() and checkEngine() methods.

The Zhiguli class includes custom logic where the car "breaks down" (sets isalive to False) after a single drive.

3. Encapsulation & Super
Used super().__init__() to properly initialize parent attributes from within child constructors.

Organized code into separate modules (models.py and main.py) for better maintainability.

4. Magic Methods
Implemented the __str__ method in all classes to provide a readable string representation of each object.

    Project Structure
models.py: Contains the Vehicle base class and all derived child classes.

main.py: The entry point script that instantiates objects, stores them in a list, and demonstrates polymorphic behavior.

    How to Run
Ensure you have Python 3.x installed.

Place both models.py and main.py in the same directory.

Open your terminal or command prompt.

Run the following command:

Bash
python main.py
    Example Output
Nissan
Model: R34, engine: RB26DETT, mileage: 50000, coolcar : True       
RB26DETT goes vroom vroom
I feel like Paul Walker, you drove: {self.mileage}

Zhiguli
Model: 2101, engine: 1.2L Carburetor, mileage: 250000, isalive: True
Your piece of garbage somehow lasted 250005
Your piece of garbage died!

Final State:
Model: 2101, engine: 1.2L Carburetor, mileage: 250005, isalive: False
import models

def main():
    skyline = models.Nissan_GTR("R34", "RB26DETT", 50000)
    zhiga = models.Zhiguli("2101", "1.2L Carburetor", 250000)

    print("Nissan")
    print(skyline)
    skyline.checkEngine()
    skyline.drive(10)
    
    print("\nZhiguli")
    print(zhiga)
    zhiga.drive(5)
    zhiga.drive(100)
    
    print("\nFinal State:")
    print(zhiga)

if __name__ == "__main__":
    main()
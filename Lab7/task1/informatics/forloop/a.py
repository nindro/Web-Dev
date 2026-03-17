a = int(input())
b = int(input())
if a < b:
    for x in range(a,b):
        if x % 2 == 0:
            print(x, end = " ")
else:
    print("ishak")
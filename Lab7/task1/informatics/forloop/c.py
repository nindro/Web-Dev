import math

a = int(input())
b = int(input())

start = math.ceil(math.sqrt(a))
end = math.floor(math.sqrt(b))

for k in range(start, end + 1):
    print(k * k, end=" ")
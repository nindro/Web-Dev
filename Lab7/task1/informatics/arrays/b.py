n = int(input())
array = []
for i in range(n):
    a = int(input())
    array.append(a)
for i in range(n):
    if array[i] % 2 == 0:
        print(array[i], end = " ")
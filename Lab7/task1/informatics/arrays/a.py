n = int(input())
array = []
for i in range(n):
    a = input()
    array.append(a)
for i in range(n):
    if i % 2 == 0:
        print(array[i], end=" ")
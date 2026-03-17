n = int(input())
array = []
for i in range(n):
    a = int(input())
    array.append(a)
k = n - 1
while k > -1:
    print(array[k], end = " ")
    k -= 1
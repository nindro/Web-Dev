n = int(input())
array = []
check = False
for i in range(n):
    a = int(input())
    array.append(a)
for i in range(n):
    k = i - 1
    if k > 0:
        if array[k] > 0 and array[i] > 0:
            check = True
            break
if check == True:
    print("YES")
else:
    print("NO")
n = int(input())
array = []
for i in range(n):
    a = int(input())
    array.append(a)
cnt = 0
for i in range(n):
    k = i - 1
    if array[k] < array[i]:
        cnt += 1
print(cnt)
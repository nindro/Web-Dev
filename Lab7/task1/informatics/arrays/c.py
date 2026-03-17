n = int(input())
array = []
for i in range(n):
    a = int(input())
    array.append(a)
cnt = 0
for i in range(n):
    if array[i] > 0:
        cnt += 1
print(cnt)
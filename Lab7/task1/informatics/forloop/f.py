x = int(input())
res = []
for i in range(len(str(x))):
    res.append(x % 10)
    x //= 10
for i in range(len(res)):
    print(res[i], end = "")
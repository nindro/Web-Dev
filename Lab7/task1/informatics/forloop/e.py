x = int(input())
res = 0
for i in range (len(str(x))):
    res += x % 10
    x //=10
print(res)
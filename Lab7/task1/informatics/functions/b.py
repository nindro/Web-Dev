def power(a, n):
    result = 1.0
    for _ in range(n):
        result *= a
    return result

b = float(input())
c = int(input())

print(power(b, c))
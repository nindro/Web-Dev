def min(a,b,c,d):
    check = a
    if (check > b):
        check = b
    if (check > c):
        check = c
    if (check > d):
        check = d
    print(check)

a, b, c, d = input().split()
min(a,b,c,d)
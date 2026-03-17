n = int(input())
arr = list(map(int, input().split()))

count = 0
while i < n - 1:
    if arr[i] > arr[i - 1] and arr[i] > arr[i + 1]:
        count += 1
    i += 1

print(count)
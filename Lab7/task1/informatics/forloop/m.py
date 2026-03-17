n = int(input())
zeros_count = 0

for i in range(n):
    number_str = input()
    
    for digit in number_str:
        if digit == '0':
            zeros_count += 1

print(zeros_count)
binary_str = input()
decimal_result = 0
power = 0
for digit in reversed(binary_str):
    if digit == '1':
        decimal_result += 2 ** power
    power += 1

print(decimal_result)
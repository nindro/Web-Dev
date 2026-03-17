def sum67(nums):
    total = 0
    record = True
    for n in nums:
        if n == 6:
            record = False
        if record:
            total += n
        if not record and n == 7:
            record = True
    return total
def centered_average(nums):
    total_sum = sum(nums)
    heaviest = max(nums)
    lightest = min(nums)
    centered_sum = total_sum - heaviest - lightest
    
    return centered_sum // (len(nums) - 2)
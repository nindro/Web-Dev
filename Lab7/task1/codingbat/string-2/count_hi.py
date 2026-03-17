def count_hi(str):
  cnt = 0
  for i in range(len(str)):
    if i != len(str) - 1:
      if str[i] == 'h':
        if str[i+1] == 'i':
          cnt += 1
  return cnt

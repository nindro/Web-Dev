def left2(str):
  n = len(str)
  raz = n - 2 # разница необходимая т.к. стринги могут быть 4 или 5
  return str[n-raz:] + str[:2]

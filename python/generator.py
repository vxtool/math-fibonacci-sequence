def fibGen(n,a=0,b=1):
  while n>0:
      yield a
      a,b,n = b,a+b,n-1

# >>> [i for i in fibGen(11)]

# [0,1,1,2,3,5,8,13,21,34,55]

def fibGen(n,a=0,b=1):
  while n>0:
    yield a
    a,b,n = b,a+b,n-1

#execute
print [i for i in fibGen(11)]

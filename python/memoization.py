memo = {0:0, 1:1}

def fib(n):
  if not n in memo:
      memo[n] = fib(n-1) + fib(n-2)
  return memo[n]

# >>> fib(100)
# 354224848179261915075

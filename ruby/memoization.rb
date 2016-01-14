def fib(n, cache = {})
  if n == 0 || n == 1
    return n
  end
  cache[n] ||= fib(n-1, cache) + fib(n-2, cache)
end
fib 14
# => 377
fib 24
# => 46368
fib 124
# => 36726740705505779255899443

def fib_gen
    Enumerator.new do |g|
        f0, f1 = 0, 1
        loop do
            g.yield f0
            f0, f1 = f1, f0 + f1
        end
    end
end

# execute
fg = fib_gen
9.times { puts fg.next }


require 'generator'

def fib_gen
    Generator.new do |g|
        f0, f1 = 0, 1
        loop do
            g.yield f0
            f0, f1 = f1, f0 + f1
        end
    end
end

# irb(main):012:0> fg = fib_gen
# => #<Generator:0xb7d3ead4 @cont_next=nil, @queue=[0], @cont_endp=nil, @index=0, @block=#<Proc:0xb7d41680@(irb):4>, @cont_yield=#<Continuation:0xb7d3e8a4>>
# irb(main):013:0> 9.times { puts fg.next }
# 0
# 1
# 1
# 2
# 3
# 5
# 8
# 13
# 21
# => 9

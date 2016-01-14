// Retorna um Array com a sequência
var fib = [0, 1];
for (var i = 2; i < 10; i++) {
  fib[ i ] = fib[ i - 1 ] + fib[ i - 2 ];
}
console.log(fib);


var fib2 = function (n) {
  var a = 0, b = 1, t;
  while (n-- > 0) {
    t = a;
    a = b;
    b += t;
    console.log(a);
  }
  return a;
}

fib2(n);

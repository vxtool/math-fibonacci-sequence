// Retorna um Array com a sequência
var fib = [0, 1];
for (var i = 2; i < 10; i++) {
  fib[ i ] = fib[ i - 1 ] + fib[ i - 2 ];
}
console.log(fib);

//
// Retorna o elemento cuja posição é informada por parâmetro
// 0 é a posição inicial
// @param {number} n
//
var fib2 = function (n){
  return n < 2 ? n : fib2(n-1) + fib2(n-2);
}

console.log(fib2(10));
// 55

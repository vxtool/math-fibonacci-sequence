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

// Outra forma, com o mesmo resultado
var fib3 = function (n) {
  return function(n,a,b) {
    return n>0 ? arguments.callee(n-1,b,a+b) : a;
  }(n,0,1);
}
console.log(fib3(10));
// 55


// Função geradora
function* fibonacciGenerator() {
    var prev = 0;
    var curr = 1;
    while (true) {
        yield curr;
        curr = curr + prev;
        prev = curr - prev;
    }
}
// Exemplo do uso da função geradora,
// quando o elemento da sequência for menor que 10
for (n of fibonacciGenerator()) {
    if (n > 10)
        break;
    console.log(n);
}

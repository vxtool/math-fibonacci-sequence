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

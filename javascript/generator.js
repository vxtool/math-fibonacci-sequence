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

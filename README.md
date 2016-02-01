# Sequência de Fibonacci

[![licence mit](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](http://hemersonvianna.mit-license.org/)
[![issues](https://img.shields.io/github/issues/math-solutions/math-fibonacci-sequence.svg?style=flat-square)](https://github.com/math-solutions/math-fibonacci-sequence/issues)

## Introdução

Leonardo Fibonacci, propôs no século XIII, a sequência numérica abaixo:

***(0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181...)***

A sequência tem uma regra simples: cada número, a partir do terceiro, é obtido somando-se os dois anteriores. Veja: 1+1=2, 2+1=3, 3+2=5 e assim por diante.

Ao transformar esses números em quadrados e dispô-los de maneira geométrica, é possível traçar uma espiral perfeita, que também aparece em diversos organismos vivos.

![Espiral fibonacci](source/img/espiral-fibonacci.svg)

Na sequência, ao se dividir qualquer número pelo anterior, teremos a razão que é uma constante conhecida como [número de ouro](https://pt.wikipedia.org/wiki/Propor%C3%A7%C3%A3o_%C3%A1urea).


## A sequência na natureza

- ***Concha do caramujo*** - Cada novo pedacinho tem a dimensão da somados dois antecessores
- ***Girassol*** - Suas sementes preenchem o miolo dispostas em dois conjuntos de espirais: geralmente, 21 no sentido horário e 34 no anti-horário.
- ***Camaleão*** - Contraído, seu rabo é uma das representações mais perfeitas da espiral de Fibonacci
- ***[Partenon](https://pt.wikipedia.org/wiki/Partenon)*** - Os gregos já conheciam a proporção, embora não a fórmula para defini-la. A largura e a altura da fachada deste templo do século V a.C. estão na proporção de 1 para 1,618.
- ***As pirâmides*** - Mais um mistério: cada bloco é 1,618 vezes maior que o bloco do nível imediatamente acima. Em algumas, as câmaras internas têm comprimento 1,618 vezes maior que sua largura.
- ***Rosto*** - Dizem que, nas faces consideradas mais harmoniosas, a divisão da distância entre o centro da boca e o "terceiro olho" pela distância entre esse ponto e uma das pupilas bate no 1,618.
- ***Corpo*** - Se um humano “mediano” dividir sua altura pela distância entre o umbigo e a cabeça, o resultado será algo em torno de 1,618.


## Fórmula

```
F(n) = { 0, 1, F(n-1) + F(n-2) }
```

## Scripts

- Javascript
  - [generator](javascript/generator.js)
  - [iteration](javascript/iteration.js)
  - [memoization](javascript/memoization.js)
  - [recursive](javascript/recursive.js)
- Python
  - [generator](python/generator.py)
  - [iteration](python/iteration.py)
  - [memoization](python/memoization.py)
  - [recursive-with-memoization](python/recursive-with-memoization.py)
  - [recursive](python/recursive.py)
- Ruby
  - [generator](ruby/generator.rb)
  - [iteration](ruby/iteration.rb)
  - [memoization](ruby/memoization.rb)
  - [recursive-with-memoization](ruby/recursive-with-memoization.rb)
  - [recursive](ruby/recursive.rb)



## Contributing

- Fork it!
- Create your feature branch: `git checkout -b my-new-feature`
- Commit your changes: `git commit -m 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request

## Log

Check [Releases](https://github.com/math-solutions/math-fibonacci-sequence/releases) for detailed changelog.

## License

[MIT license](http://hemersonvianna.mit-license.org/) © Hemerson Vianna

# Cifra de César

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Considerações gerais](#3-considerações-gerais)
* [4. Definição do produto](#4-definição-do-produto)
* [5. Considerações técnicas](#5-considerações-técnicas)


***

## 1. Prefácio

Cifrar significa codificar. A [cifra de
César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) é um dos primeiros
tipos de criptografias conhecidas na história. O imperador romano Júlio César
utilizava essa cifra para enviar ordens secretas aos seus generais no campo de
batalha.

![caeser-cipher](https://user-images.githubusercontent.com/11894994/60990999-07ffdb00-a320-11e9-87d0-b7c291bc4cd1.png)

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
* A letra A será D
* A palavra CASA será FDVD

Atualmente todas as cifras de substituição alfabética simples, são decifradas
com facilidade e não oferecem muita segurança na comunição, mas a cifra de César
muitas vezes pode fazer parte de um sistema mais complexo de criptografia, como
a cifra de Vigenère, e tem aplicação no sistema ROT13.

## 2. Resumo do projeto

Este projeto é um jogo online de conquista que visa estimular a criatividade, estratégia, trabalho em equipe e liderança.
O jogador irá comandar um exército com o intuito de conquistar outros reinos. É permitido fazer alianças com outros jogadores para alcançar os objetivos.
Como forma de comunicação será usada a Cifra de César para enviar mensagens secretas aos aliados ou destruir as mensagens recebidas para que não caia nas mãos dos inimigos.

## 3. Considerações gerais

* É possível cifrar e decifrar letras do alfabeto sejam elas maiúsculas ou minúsculas;
* Não há alteração para números e caracteres especiais;
* Os botões Enviar e Destruir são ilustrativos, ainda não há funcionalidade neles.

## 4. Definição do produto

### Usuário

Os usuários são pessoas que gostam de jogos online, que tem por objetivo o lazer e o entretenimento. Este jogo atende estas necessidades e auxilia no desenvolvimento de habilidades como estratégia, raciocínio lógico, entre outros.

### Tema do produto

O tema do produto foi escolhido para que a navegação seja simples para o usuário. Como plano de fundo, foi selecionado a imagem de uma mulher guerreira para que estas se sintam também representadas neste universo.


### Interface do usuário

A interface permite ao usuário:

* Eleger um número indicando quantas posições de deslocamento de caracteres quer que a cifra utilize.
* Inserir uma mensagem para ser cifrada.
* Ao clicar no botão Cifrar será exibido o resultado da mensagem cifrada.
* Inserir uma mensagem para ser decifrada.
* Ao clicar no botão Decifrar será exibido o resultado da mensagem decifrada.

## 5. Considerações técnicas

* Foi utilizado Vanilla Js;
* Fontes do Google Fonts;
* Os testes realizados retornaram 100% de aproveitamento.
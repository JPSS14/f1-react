# f1-react
O projeto F1-react, é um simulador do GP de Interlagos no Brasil/The F1-react project, is a simulator of the Interlagos GP in Brazil.

## O que me levou a construir o projeto?
Bom, por eu ter começado a acompanhar Fórmula 1 em 2020, fiquei animado em tentar me aproximar de alguma forma desse mundo, aí tive a ideia de construir um simulador que fosse realista o suficiente para chegar nos números de uma classificação da Fórmula 1. Inicialmente fiz em C, onde podem conferir aqui mesmo no github, meu [repositório ](https://github.com/JPSS14/f1-race-c). 

Mas apesar de ser funcional o programa não era muito visual, então logo nas primeiras aulas de um curso de React, vi que era possível conciliar técnicas de CSS3 e HTML5 em conjunto com funções em JS, o que torna viável a construção do simulador em React. Desde então passei a construir o meu primeiro projeto em React, o f1-react.

## Introdução
O projeto consiste em um simulador de corrida, em que apliquei informações em uma fórmula de velocidade média, onde pretendo sempre descobrir o tempo em que um carro leva para completar a volta.

## Desenvolvimento
Como estava aprendendo o conceito de componentes em React vi que a herança entre componentes era algo incrível e que abria muitas possibilidades. Então comecei a pensar em uma forma de aproveitar essa funcionalidade do React para construir uma aplicação.
 
Criei um componente pai chamado “pista” onde ele recebe todo o cálculo da velocidade média, onde eu adicionei o tamanho da pista em que a corrida é realizada, no caso Interlagos no Brasil, que tem 4309 metros. Ainda em relação ao cálculo levei em consideração a melhor volta já registrada na pista que é de aproximadamente 1m7s. Baseado nisso adicionei uma velocidade média que resultasse em um tempo semelhante a este.

Os resultados do cálculo são enviados para o componente filho que se chama “piloto”, onde é realizada uma conversão de tempo e é exibido em forma de card as informações do piloto e o seu tempo.

Depois que o resultado mostrou-se promissor, adicionei outro piloto, então precisei tornar variável a velocidade entre os dois para que eles não chegassem juntos no final da corrida. Mantendo uma margem de erro de 10 km/h, os pilotos agora passaram a chegar com tempos diferentes. 

Precisei armazenar as informações dos pilotos de forma que fosse possível reorganiza-los caso necessário, inicialmente tentei array, mas não existia uma relação entre as próprias informações de um piloto então seria complexo mudá-las de posição, então pensei em JSON, depois de pesquisar e realizar alguns testes, fiz um array de JSON.

Agora com as informações de cada piloto armazenadas era possível organizá-las de acordo com a ordem de chegada, para isso utilizei uma função de ordenação que era disponibilizada pelo próprio JS.

![f1-react-img3](https://user-images.githubusercontent.com/40327303/98481309-21e15480-21d8-11eb-82c0-bba08d136c06.png)

Com o JSON ordenado pela ordem de chegada as informações da pista são passadas para o piloto, uma grande dificuldade do projeto foram as imagens. No React é necessário importar a imagem para depois utilizá-la, então tive que importar as imagens no componente “pista” e estabelecer os valores no JSON, e depois enviá-lo ao componente “pista” dessa forma ele sempre recebe o caminho correto da imagem independente de onde esteja rodando.


![f1-react-img2](https://user-images.githubusercontent.com/40327303/98481246-b4cdbf00-21d7-11eb-96a3-8f471c3b2ad2.png)

A partir de então adicionei os 20 pilotos em um total de 71 voltas, fiz algumas modificações a nível de CSS3 para tornar a exibição dos resultados mais agradável.

![f1-react-img1](https://user-images.githubusercontent.com/40327303/98481272-dfb81300-21d7-11eb-89d5-cb23ad13d95b.png)


## Conclusão
O projeto consegue simular o resultado dos 20 pilotos em 71 voltas no circuito de Interlagos, e exibe de forma clara o resultado final da corrida, com as imagens e cores dos respectivos pilotos e equipes. Você pode conferir o [resultado](https://jpss14.github.io/f1-react/).



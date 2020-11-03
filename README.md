# DesafioAMFernandes
Código Realizado para o teste de estágio da Incorporadora AM fernandes 

🛠 Tecnologias
As seguintes ferramentas foram usadas na construção do projeto:

React

##Explicação do Desafio

Desafio AM Fernandes
A AM Fernandes está sempre buscando profissionais interessados e que gostem de desafios, com isso montamos esse desafio para a última etapa do processo seletivo para a vaga de estágio em desenvolvimento de software.

Segue abaixo a descrição da atividade, na semana de entrega desse desafio será marcado a call da terceira fase, onde iremos ter uma nova conversa e debater sobre como foi a realização da atividade.

Descrição da atividade
Nessa etapa o candidato deve escrever um programa, na linguagem/Frameworks que preferir, obedecendo as seguintes regras:

Fazer uma requisição para a nossa API que retorna os dados de alguns imóveis.
Incluir um algoritmo de ordenação em qualquer parte do software, por exemplo: ordernar por nome do condomínio. (obs: qualquer algoritmo, a eficiência do algoritmo não será um fator a ser avaliado, apenas sua implementação).
A API retorna um Array de JSON onde cada elemento contem as seguintes propriedades:

{
    "bairro": "Vila Gilda",
    "cep": "09190380",
    "cidade": "Santo André",
    "fachada": "https://firebasestorage.googleapis.com/v0/b/easyhouse-am.appspot.com/o/img_fachada%2F1349541563914234302_fachada.jpg?alt=media",
    "location": {
      "_lat": -23.6706885,
      "_long": -46.5379514
    },
    "nome": "Taste residencial",
    "num": "124",
    "rua": "Rua Kugler",
    "planta": {
      "dorms": 3,
      "metragem": 76,
      "preco": 465000,
      "vagas": 2
    }
  }
Observações:
A propriedade num se refere ao número do endereço.
A propriedade fachada é a URL de uma imagem da fachada, alguns links podem estar quebrados.
NÃO é obrigatório utilizar todas as propriedades.
O que posso desenvolver?
A decisão sobre o que desenvolver é totalmente livre!!

Você pode desenvolver por exemplo uma página que faz uma requisição para a API, assim que recebe esses dados ordena por algum campo arbitrário, ou é ordenado através de uma ação de clique e lista na página esse imóveis, ou um algoritmo que faça uma analise a partir dos dados recebidos, ou qualquer outra ideia, contanto que respeite as regras impostas acima.

O que será avaliado?
Como o candidato lida com APIs de terceiros.
A implementação do algoritmo de ordenação.
Quaisquer outras funcionalidade adicionadas no projeto serão analisadas e vistas com bons olhos.
A API
A API tem uma única rota, /imoveis, o método GET retorna todos os dados dessa API:

URL: https://api.estagio.amfernandes.com.br/imoveis


## Resultado do Desafio

Para a resolução do desafio escolhi ordenar pelo nome dos empreendimentos.
Para isso usei a função de ordem superior sort com um tratamento nos dados de entrada para que Upper e Low case não interferirem no resultado. E testei diferentes entradas nos testes unitarios que passaram corretamente.

Para mostrar esse resultado na tela decidi usar a biblioteca React com a ajuda da biblioteca @material-ui/core para facilitar a implementação de uma tabela bonita.

 <img src=”ResultadoDesafioAMFernandes.PNG”>

## Rodando a aplicação

Clone este repositório
$ git clone https://github.com/MatheusPrudencio/Projeto_PushStart

Instale as dependências
$ npm install

Execute a aplicação
$ npm run

O servidor inciará na porta:3000 - acesse http://localhost:3000
Então você ira navegar dentro da aplicação

Para rodar os testes da aplicação
$ npm test




# Regras do Jogo

## Início

O jogador adiciona produtos à lista.

Depois de pelo menos três itens, o botão **Ver lista** fica disponível.

## Tentativas de visualizar a lista

### Primeira tentativa

O sistema responde:

> Aqui está sua lista. 😊

A lista não aparece.

### Segunda tentativa

O sistema demonstra estranhamento.

A lista continua escondida.

### Terceira tentativa

O sistema sugere que talvez esteja faltando alguma coisa.

O mistério começa.

## Item secreto

Quando o mistério começa, o jogo escolhe aleatoriamente um item secreto.

O item secreto:

- deve pertencer ao conjunto de mistérios disponíveis;
- não pode já existir na lista do jogador;
- permanece o mesmo durante toda a partida.

Quantidade e preço não interferem na solução.

A identificação é feita pelo nome normalizado do produto.

## Pistas

O cronômetro começa quando o mistério é iniciado.

- 45 segundos: primeira pista;
- 75 segundos: segunda pista.

## Tentativas

O jogador pode continuar adicionando produtos.

Produtos incorretos permanecem armazenados na lista.

A lista continua escondida enquanto o item correto não for encontrado.

## Vitória

Quando o jogador adiciona o item secreto:

1. o mistério termina;
2. o cronômetro é interrompido;
3. a lista completa é revelada;
4. todos os produtos adicionados permanecem intactos;
5. ocorre uma pequena anomalia visual no total;
6. a interface entra no estado final da partida.

## Regra de integridade

O jogo nunca deve alterar silenciosamente os produtos cadastrados pelo jogador.

O mistério modifica apenas a apresentação e o estado da interface.

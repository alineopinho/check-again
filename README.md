# Check Again

Uma lista de compras interativa feita com HTML, CSS e JavaScript.

À primeira vista, a aplicação funciona como uma lista de compras comum: o usuário adiciona produtos, quantidades e preços. Porém, ao tentar visualizar sua lista, a interface começa a apresentar um comportamento estranho.

## Conceito

O projeto mistura uma aplicação web simples com uma pequena experiência interativa de mistério.

A interface possui uma aparência suave e amigável, em tons pastéis, enquanto o comportamento da aplicação começa gradualmente a contradizer essa aparência.

## Fluxo principal

1. O usuário adiciona produtos, quantidades e preços.
2. Depois de pelo menos três itens, o botão "Ver lista" é liberado.
3. A aplicação afirma que exibiu a lista, mas nada aparece.
4. Após novas tentativas, surge a mensagem de que talvez esteja faltando alguma coisa.
5. Um item secreto é escolhido dinamicamente.
6. O usuário pode continuar adicionando produtos e tentando recuperar a lista.
7. Após algum tempo, pistas são exibidas.
8. Quando o item correto é adicionado, a lista é recuperada.
9. Todos os produtos cadastrados aparecem normalmente.
10. O total apresenta uma pequena anomalia antes de voltar ao valor correto.

## Regras importantes

- O item secreto muda entre execuções.
- O item secreto não deve ser escolhido entre produtos que já estavam cadastrados quando o mistério começou.
- Quantidade e preço do item secreto são livres; apenas o nome do produto importa.
- Produtos adicionados durante o mistério continuam armazenados.
- A tabela permanece escondida até o mistério ser resolvido.
- Os dados reais da lista não devem ser alterados pelo mistério.
- A interface deve continuar visualmente delicada e amigável mesmo durante os comportamentos estranhos.

## Tecnologias

- HTML
- CSS
- JavaScript

## Conceitos praticados

- DOM
- Eventos
- Arrays e objetos
- Funções
- `map`, `filter`, `find` e `reduce`
- `setTimeout`
- `setInterval`
- Manipulação de classes CSS
- Estado da aplicação
- Formatação de valores monetários
- Responsividade

## Funcionalidades

- Adicionar produtos
- Definir quantidade e preço
- Calcular subtotal
- Calcular total
- Editar itens
- Remover itens
- Mensagens dinâmicas
- Sistema de pistas
- Item secreto
- Timer do mistério
- Recuperação da lista
- Efeito temporário de anomalia no total

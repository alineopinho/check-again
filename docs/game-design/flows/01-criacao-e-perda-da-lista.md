# Fluxo 01 — Criação e perda da lista

## Objetivo

Apresentar inicialmente o Check Again como uma lista de compras comum e introduzir a primeira anomalia após a tentativa de finalizar a compra.

## Fluxo

```mermaid
flowchart TD
    A[Tela inicial] --> B[Start]
    B --> C[Limpar e iniciar dados da partida]
    C --> D[Adicionar produtos]
    D --> E{Tem pelo menos 3 itens?}

    E -- Não --> D
    E -- Sim --> F[Ver lista]

    F --> G[Exibir lista normalmente]
    G --> H[Finalizar compra]
    H --> I{Deseja finalizar a compra?}

    I -- Não --> G
    I -- Sim --> J[Processando compra...]

    J --> K[Erro: não foi possível finalizar a compra. Lista vazia]
    K --> L[Voltar para a lista]

    L --> M[Itens apresentam anomalias]
    M --> N[Itens desaparecem aos poucos]
    N --> O[Lista fica visualmente vazia]

    O --> P[Verificar lista]
    P --> Q[Processando...]

    Q --> R[Talvez esteja faltando alguma coisinha... 🤔]

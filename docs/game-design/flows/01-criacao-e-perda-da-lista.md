# Fluxo 01 — Criação e perda da lista

## Objetivo

Apresentar inicialmente o Check Again como uma lista de compras comum e, após a tentativa de finalizar a compra, introduzir a primeira anomalia do sistema.

## Fluxo

```mermaid
flowchart TD
    A[Adicionar produto] --> B{3 ou mais itens?}
    B -- Não --> A
    B -- Sim --> C[Exibir lista]
    C --> D[Finalizar compra]
    D --> E[Ocultar lista visualmente]
    E --> F[Informar que nenhum item foi encontrado]
    F --> G[Preservar dados internamente]
    G --> H[Iniciar mistério]
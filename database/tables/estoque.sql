create table vendas.estoque(
    id_loja integer not null,
    id_produto integer not null,
    quantidade integer not null,
    CONSTRAINT estoque_produto_fk FOREIGN KEY(id_produto) references vendas.produto(id), 
    CONSTRAINT estoque_loja_fk FOREIGN KEY(id_loja) references vendas.loja(id),
    CONSTRAINT estoque_pk PRIMARY KEY(id_loja, id_produto) 
)
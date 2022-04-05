create table vendas.pedido(
    id serial primary key not null,
    id_produto integer not null,
    id_usuario integer not null,
    CONSTRAINT pedido_produto_fk FOREIGN KEY(id_produto) references vendas.produto(id),
    CONSTRAINT pedido_usuario_fk FOREIGN KEY(id_usuario) references seguranca.usuario(id), 
    quantidade integer not null,
    valor_total decimal(8, 2) not null,
    data_criacao timestamp without time zone not null
)
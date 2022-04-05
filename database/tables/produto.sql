create table vendas.produto(
    id serial primary key not null,
    nome varchar(100) not null,
    preco decimal(6, 2),
    marca varchar(25),
    data_criacao timestamp without time zone not null,
    data_alteracao timestamp without time zone,
    id_usuario integer not null,
    CONSTRAINT produto_usuario_fk FOREIGN KEY(id_usuario) references seguranca.usuario(id) 
)

-- chave estrangeira em geral é a chave primaria da outra tabela
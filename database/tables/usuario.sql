create table seguranca.usuario(
    id serial primary key,
    nome varchar(50) not null,
    usuario varchar(50) not null,
    senha varchar(25) not null,
    data_criacao timestamp without time zone not null,
    data_alteracao timestamp without time zone
)
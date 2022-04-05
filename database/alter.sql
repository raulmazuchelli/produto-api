alter table vendas.produto
	alter column id_usuario set not null,
    add email varchar(250),
    drop column senha
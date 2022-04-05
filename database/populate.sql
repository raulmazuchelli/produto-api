insert into seguranca.usuario(nome, usuario, senha, data_criacao)
values
	('raul', 'raul_mazuchelli', '123', now()),
	('thiago', 'thiago_moreira', '1234', now())


insert into vendas.loja(cidade) values
	('Franca'),
	('Batatais')


insert into vendas.produto(nome, preco, marca, data_criacao, id_usuario)
values
	('batata', 4, 'da roca', now(), 1),
	('feijao', 10, 'rezende', now(), 2)


insert into vendas.estoque(id_loja, id_produto, quantidade)
values
	(1, 1, 10),
	(2, 2, 20)
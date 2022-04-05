select * from vendas.produto as p
	inner join seguranca.usuario u on u.id = p.id_usuario

select * from vendas.produto as p
	left join seguranca.usuario u on u.id = p.id_usuario

select * from vendas.produto as p
	right join seguranca.usuario u on u.id = p.id_usuario

select * from seguranca.usuario as u
	right join vendas.produto p on u.id = p.id_usuario


insert into vendas.produto(nome, preco, marca, data_criacao, id_usuario)
values
	('non-user1', 4, 'x', now(), null),
	('non-user2', 10, 'x', now(), null)


select * from vendas.estoque e
	join vendas.produto p on p.id = e.id_produto
	join vendas.loja l on l.id = e.id_loja


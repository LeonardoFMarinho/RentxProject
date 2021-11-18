*Requisitos Funcionais* = RF
*Requisitos não funcionais* = RNF
*Regras de negócio* = RN



# Cadastro de carro
*RF*
[] Deve ser possivel cadastrar um novo carro


*RN*
[] Não deve ser possivel cadastrar o carro com placa já existente
[] Não deve ser possivel alterar a placa de um carro
[] O carro deve ser cadastrado, por padrão, com disponibilidade
[] Não deve ser possivel cadastro de carros por usuarios não administradores


# Listagem de carros
*RF*
[] Deve ser possivel listar os carros disponíveis  
[] Deve ser possivel listar todos os carros disponiveis pelo nome da categoria
[] Deve ser possivel listar todos os carros disponiveis pelo nome da marca
[] Deve ser possivel listar todos os carros disponiveis pelo nome do carro

*RNF*

*RN*

[] O usuário não precisa  estar logado no sistema


# Cadastro de especificação no carro
*RF* 
[]Deve ser possivel cadastrar uma especificação para um carro
[]Deve ser possivel listar todas as especificações
[]Deve ser possivel listar todos os carros

*RN*
[] Não deve ser possivel cadastrar uma especificação de um carro não existente/ não existente
[] Não deve ser possivel cadastrar uma especificação já existente para o mesmo carro
[] Não deve ser possivel cadastro de carros por usuarios não administradores


# Cadastro de imagens do carro
*RF*
[]Deve ser possivel cadastrar a imagem do carro
[]Deve ser possivel listar todos os carros

*RNF*
[] Utilizar o multer paaara upload dos arquivos 

*RN*
[] O usuario deve poder cadastrar mais de uma imagem para o mesmo carro
[] Não deve ser possivel cadastro de carros por usuarios não administradores


# Aluguel de carro
*RF*
[] Deve ser possivel cadastrar um aluguel

*RN*
[] O aluguel deve ter duração minima de 24h 
[] Não deve ser possivel cadastrar um novo aluguel caso ja exista um aberto para o mesmo usuario 
[] Não deve ser possivel cadastrar um novo aluguel caso ja exista um aberto para o mesmo carro
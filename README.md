<br />
<p align="center">
    <img src="./readme/baralho.png" alt="Logo" height="100">

  <h3 align="center">API Duelo de Cartas Pokémon</h3>
 <br />
  <p align="center">
     
  <p align="center">
  <a href="#sobre"> Sobre </a> |
  <a href="#linguagem-e-framework"> Linguagem e Framework </a> |
  <a href="#pré-requisitos"> Pré-requisitos </a> |
  <a href="#rotas-da-aplicação"> Rotas da aplicação </a> |
  <a href="#validações"> Validações </a> |
	<a href="#rodando-o-projeto"> Rodando o projeto </a> |
	<a href="#dependências"> Dependências </a> |
  <a href="#tecnologias-utilizadas"> Tecnologias utilizadas </a>      
       <br />
    <br />
    <h1 align="center">
    <img src="./readme/desafio-somos.gif" alt="gif-readme">
 </h1>
  </p>
</p>

# Sobre

O objetivo do projeto foi criar uma API de comparação de cartas.
Nesta API é possível cadastrar, listar, consultar, atualizar e deletar cartas, também é possível enviar duas cartas para comparação, após a comparação é informado a carta vencedora e a carta perdedora e em quais atributos cada carta venceu.

# Linguagem e Framework

A aplicação foi construída utilizando TypeScript e Node.JS

# Pré-requisitos

- Operações para cadastro, listagem, consulta e alteração de cartas
- Operações para comparação de cartas e resultado acumulado
- Banco de dados para armazenar as cartas e os resultados das comparações
- Operação de exclusão de cartas
- Adicionar paginação e filtros na listagem de cartas

# Rotas da aplicação:

## Cartas

<b>[GET] </b> /cards/?items&page&name - A rota deve exibir todas as cartas cadastrados. Também é possível escolher o número de cartas por página, o número da página atual e filtrar cartas pelo nome.<br>

Request:

```typescript
  queryParams(opcional):
    items=number (número de cartas em cada página)
    page=number (número da página atual)
    name=string (filtra o resultado pelo nome da carta)

```

Response:

```typescript
  {
    "numberOfPages": number,
	"page": number,
	"cards": [
    {
	  "id": number,
	  "name": string,
	    "attributes": {
		  "hp": string,
		  "attack": string,
		  "defense": string,
		  "specialAttack": string,
		  "specialDefense": string,
		  "speed": string
          }
	}
  ]
}
```

<b>[GET] </b> /cards/:id - A rota deve listar uma carta baseado em seu ID.<br>

Request:

```typescript
param: number
```

Response:

```typescript
  {
	"card": {
		"id": number,
		"name": string,
		"attributes": {
			"hp": number,
			"attack": number,
			"defense": number,
			"specialAttack": number,
			"specialDefense": number,
			"speed": number
		}
	}
}
```

<b>[POST] </b> /cards - A rota deve cadastrar uma carta com as informações passadas no corpo da requisição.<br>

Request:

```typescript
{
name: string,
attributes: {
    hp: number,
	attack: number,
	defense: number,
	specialAttack: number,
	specialDefense: number,
	speed: number
  }
}
```

Response:

```typescript
  {
	"card": {
		"id": number,
		"name": string,
		"attributes": {
			"hp": number,
			"attack": number,
			"defense": number,
			"specialAttack": number,
			"specialDefense": number,
			"speed": number
		}
	}
}
```

<b>[PATCH] </b> /cards/:id - A rota deve atualizar uma carta baseado em seu ID com as informações passadas no corpo da requisição. Caso necessário apenas uma informação pode ser atualizada por vez.<br>

Request:

```typescript
param: number
```

```typescript
{
name?: string,
attributes?: {
    hp?: number,
	attack?: number,
	defense?: number,
	specialAttack?: number,
	specialDefense?: number,
	speed?: number
  }
}
```

Response:

```typescript
  {
	"card": {
		"id": number,
		"name": string,
		"attributes": {
			"hp": number,
			"attack": number,
			"defense": number,
			"specialAttack": number,
			"specialDefense": number,
			"speed": number
		}
	}
}
```

<b>[DELETE] </b> /cards/:id - A rota deve deletar uma carta baseado em seu ID.<br>
Request:

```typescript
param: number
```

Response:

```typescript
  {
	"deletedCard": {
		"id": number,
		"name": string,
		"attributes": {
			"hp": number,
			"attack": number,
			"defense": number,
			"specialAttack": number,
			"specialDefense": number,
			"speed": number
		}
	}
}
```



# Validações

Foram adicionadas as seguintes validações nas rotas da aplicação: <br><br>
<b>[GET] </b> /cards/?items&page&name <br>

- O query param 'items' é opcional e deve ser um número inteiro.
- O query param 'page' é opcional e deve ser um número inteiro.
- O query param 'name' é opcional e deve ser uma string.

<b>[GET] </b> /cards/:id - A rota deve listar uma carta baseado em seu ID.<br>

- O parâmetro ':id' é obrigatório e deve ser um número inteiro.
- Não é possível consultar uma carta não existente.

<b>[POST] </b> /cards - A rota deve cadastrar uma carta com as informações passadas no corpo da requisição.<br>

- O campo 'name' é obrigatório e deve ser uma string.
- O campo 'attributes' é obrigatório e deve ser um objeto.
- O campo 'hp' é obrigatório e deve ser um número inteiro.
- O campo 'attack' é obrigatório e deve ser um número inteiro.
- O campo 'defense' é obrigatório e deve ser um número inteiro.
- O campo 'specialAttack' é obrigatório e deve ser um número inteiro.
- O campo 'specialDefense' é obrigatório e deve ser um número inteiro.
- O campo 'speed' é obrigatório e deve ser um número inteiro.
- Não é possível cadastrar uma carta com um nome já existente.

<b>[PATCH] </b> /cards/:id - A rota deve atualizar uma carta baseado em seu ID com as informações passadas no corpo da requisição. Caso necessário apenas uma informação pode ser atualizada por vez.<br>

- O parâmetro ':id' é obrigatório e deve ser um número inteiro.
- O campo 'name' é opcional e deve ser uma string.
- O campo 'attributes' é opcional e deve ser um objeto.
- O campo 'hp' é opcional e deve ser um número inteiro.
- O campo 'attack' é opcional e deve ser um número inteiro.
- O campo 'defense' é opcional e deve ser um número inteiro.
- O campo 'specialAttack' é opcional e deve ser um número inteiro.
- O campo 'specialDefense' é opcional e deve ser um número inteiro.
- O campo 'speed' é opcional e deve ser um número inteiro.
- Não é possível atualizar uma carta não existente.

<b>[DELETE] </b> /cards/:id - A rota deve deletar uma carta baseado em seu ID.<br>

- O parâmetro ':id' é obrigatório e deve ser um número inteiro.
- Não é possível deletar uma carta não existente.

# Rodando o projeto:

### Pré-requisitos:

Antes de começar, você precisará instalar em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e [Insomnia](https://insomnia.rest/download). <br> Além disso, é aconselhável ter um editor como o [VSCode](https://code.visualstudio.com/) para trabalhar com o código!

### Instalando e rodando o projeto:

```bash
# Clone este repositório
$ git clone https://github.com/brunoandreotti/desafio-somos.git

# Acesse a pasta do projeto no terminal
$ cd desafio-somos

# Abra a pasta do projeto no VSCode
$ code .

# Instale as dependências do projeto
$ npm install

# Crie um arquivo .env na raiz do projeto e adicione a url do seu banco de dados
  DATABASE_URL="CONNECTOR://USER:PASSWORD@HOST:PORT/DATABASE"

  Exemplo = "postgresql://usuario:123@localhost:5432/desafio-somos"

# Rode as migrations e popule o banco de dados
$ npx prisma migrate dev

# Inicie o servidor da aplicação
$ npm run dev

# Utilize o Insomnia para realizar as requisições nas rotas utilizando a URL
http://localhost:3000/
```

Caso queira importar as rotas da aplicação para o Insomnia, clique no botão: <br> <br>
<a href="https://insomnia.rest/run/?label=rotas-desafio-somos&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fbrunoandreotti%2Fdesafio-somos%2Freadme%2FInsomnia-Desafio-Somos.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>

# Dependências:

```javascript
 "devDependencies": {
    "@types/express": "^4.17.13",
    "nodemon": "^2.0.19",
    "prisma": "^4.1.1",
    "ts-node": "^10.9.1",
    "typescript": "^4.7.4"
  },
  "dependencies": {
    "@prisma/client": "^4.2.1",
    "express": "^4.18.1",
    "express-async-errors": "^3.1.1",
    "express-validator": "^6.14.2"
  }
```

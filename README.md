# Uol compasso

Projeto de teste

## Clone the repository:

- Primeiramente você deverá clonar o projeto;

```
$ git clone https://github.com/LeonardoDB/compasso.git
$ cd compasso
```

- Você deverá criar um container no docker e um banco postgres com os seguintes dados de acesso (ormconfig.json):

```
- username: postgres
- password: compasso
- database: uol_compasso
```

Após criado você deverá rodar o comando yarn para instalar todas as dependências, o migration:run para criar a estrutura na base de dados e rodar um yarn dev:server para inicializar a aplicação.

```
$ yarn
$ yarn typeorm migration:run
$ yarn dev:server
```

🚀 Server started on port 3333

## Routes List:

### Cities

| Method     | URI      | Data                                                      |
| ---------- | -------- | --------------------------------------------------------- |
| `POST`     | `cities` | `{"name": "Nova Trento","state": "Santa Catarina"}`       |
| `GET/HEAD` | `cities` | `{"name": "Nova Trento","state": "Santa Catarina"} or {}` |

Get cities:

- http://localhost:3333/cities?name=Tijucas
- http://localhost:3333/cities?state=Santa%20Catarina
- http://localhost:3333/cities

### Clients

| Method     | URI            | Data                                                                                       |
| ---------- | -------------- | ------------------------------------------------------------------------------------------ |
| `POST`     | `clients`      | `{"name": "Leonardo", "gender": "masculino", "birth": "22/11/1998", "city_id": "city_id"}` |
| `PUT`      | `clients/{id}` | `{"name": "João"}`                                                                         |
| `GET/HEAD` | `clients`      | `{"name": "Leonardo","id": "city_id"} or {}`                                               |
| `DELETE`   | `clients/{id}` | `{}`                                                                                       |

Get clients:

- http://localhost:3333/clients?name=Leonardo
- http://localhost:3333/clients?id=id_client
- http://localhost:3333/clients

## Tests:

Para executar os testes da aplicação basta rodar o seguinte comando:

```
 $ yarn teste
```

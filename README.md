
DashboardService

A backend webservice for [IDS_Dashboard](https://github.com/Calebe94/IDS_Dashboard).

## Setup

* Instalar as Dependências:
  ```
    npm install
  ```

* Para criar o banco:
  ```
    npm run createdb
  ```

* Rodar o servidor para testes:
  ```
    npm test
  ```

* Rodar o servidor para Produção:
  ```
    npm start
  ```

## Rotas

### Autenticação

Rota para a autenticação do eleitor.

```
  /api/auth/
```
  * Tipo: POST
  * Recebe: JSON { username: username, password: password}
  * Retorna: {"auth":true}%

* Teste: 

      curl -d '{"username": "123412341234", "password": "spcsp2018"}' -H "Content-Type: application/json" -X POST http://localhost:8080/api/auth/

### Adicionar Medidas

Rota para adicionar medidas de temperatura ou umidade no banco de dados.

```
  /api/add/:type
```
  * Tipo: POST
  * Recebe: *humidity*, *temperature* ou *measure* como parâmetro de URL
    * measure: { temperature: value, humidity: value }
  * Retorna:  { measure: String } 

* Teste: 

      curl -d '{"temperature": "10", "humidity": "15"}' -H "Content-Type: application/json" -X POST http://localhost:8080/api/add/measure

      curl -d '{"measure": "10"}' -H "Content-Type: application/json" -X POST http://localhost:8080/api/add/humidity

### Setpoints

Rota utilizada para setar os setpoints.

```
  /api/setpoints/set/:(humidity/temperature)
```

  * Tipo: POST
  * Recebe: 
      * { minimal_value: { type: String },maximum_value: { type: String}}
  * Retorna: { status: true/false}

* Teste: 
      curl -d '{"minimal_value": "10", "maximum_value": "30"}' -H "Content-Type: application/json" -X POST http://localhost:8080/api/set/temperature

Rota utilizada para resgatar os setpoints.

```
  /api/setpoints/get/:(humidity/temperature)
```

  * Tipo: GET
  * Retorna: 
      * { minimal_value: { type: String },maximum_value: { type: String}}

* Teste: 
      curl "http://localhost:8080/api/setpoints/set/tempetature"


### Obter Medidas

#### Última Medida

Rota utilizada para resgatar a última medida

```
  /api/measure/last/:(humidity/temperature)
```

  * Tipo: GET
  * Retorna: { measure: { type: String } }

* Teste: 
      curl http://localhost:8080/api/last/humidity

#### Média das horas do dia

```
  /api/measure/today/:(humidity/temperature)
```

  * Tipo: GET
  * Retorna: { [ hour(1-24): { type: String }] }

* Teste: 
      curl http://localhost:8080/api/get/humidity


# Referências

* [An Introduction to Mongoose for MongoDB and Node.js](https://code.tutsplus.com/articles/an-introduction-to-mongoose-for-mongodb-and-nodejs--cms-29527)

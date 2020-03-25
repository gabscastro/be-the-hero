const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * npm: Instalar pacote
 * npx: Executar um determinado pacote
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar informações no back-end
 * POST: Criar uma informação no back-end (Cadastrando)
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após o "?" (Filtros, paginação) > ex: http://localhost:3333/users?name=Gabriel
  * Route Params: Parâmetros utilizados para identificar recursos > ex: http://localhost:3333/users/1
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

  /**
   * Driver: SELECT * FROM users;
   * Query Builder: table('users').select('*').where() -- Javascript (Knex.js)
   */

   /**
    * Layout: figma.com
    */


app.listen(3333);
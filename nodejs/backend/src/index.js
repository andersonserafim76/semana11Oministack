const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()); //tornar o json entendido pela aplicação
app.use(routes);

app.listen('3333');

/**
 * Rotas / Recursos
 */

 /**
  * Metodos HTTP:
  * 
  * GET : Buscar/listar uma informação do back-end
  * POST : Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: deletar uma informação no back-end
  */

  /**
   * Tipos de parametros:
   * 
   * Query Params: parametros nomeados enviados na rota após o simbolo "?" (filtros, paginação)
   * Route Params: parametros utilizados para identificar recursos
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   */




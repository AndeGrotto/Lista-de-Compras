const express = require('express');
const routes = express.Router();
const controle = require('../controller/CompraCont');

// Aqui vão todos os endpoints
routes.route('/compras').get(controle.listar);
routes.route('/compras').post(controle.incluir);
routes.route('/compras').put(controle.alterar);
routes.route('/compras/:codBarra').delete(controle.excluir);
routes.route('/compras/:codBarra').get(controle.obterPeloCodBarra);
routes.route('/compras/filtro/:filtro').get(controle.filtrar);

module.exports = routes;
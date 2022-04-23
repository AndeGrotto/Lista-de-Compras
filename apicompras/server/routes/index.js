const { Router } = require("express");
const routes = Router();

// Liberar origens para requisições
var cors = require('cors');
routes.use(cors({ origin: '*' }));
//routes.use(cors({origin: 'http://localhost:3001'}));

// Cada programa terá uma entrada em routes
const compraRout = require("./CompraRout");
routes.use("/api", compraRout);

module.exports = routes;
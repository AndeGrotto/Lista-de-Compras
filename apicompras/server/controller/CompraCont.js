const Compra = require('../model/CompraSchema');

module.exports = {

    listar: async (req, res) => {
        Compra.find((err, objetos) => {
            (err ? res.status(400).send(err) : res.status(200).json(objetos));
        }).sort({ nome: 1 }); // -1 decrescente 1 crescente
    },

    incluir: async (req, res) => {
        let obj = new Compra(req.body);
        obj.save((err, obj) => {
            (err ? res.status(400).send(err) : res.status(200).json(obj));
        });
    },

    alterar: async (req, res) => {
        let obj = new Compra(req.body);
        Compra.updateOne({ _id: obj._id }, obj, function (err) {
            (err ? res.status(400).send(err) : res.status(200).json(obj));
        });
    },
    excluir: async (req, res) => {
        Compra.deleteOne({ _id: req.params.id }, function (err) {
            (err ? res.status(400).send(err) : res.status(200).json("message:ok"));
        });
    },

    obterPeloId: async (req, res) => {
        Compra.findOne({ _id: req.params.id }, function (err, obj) {
            if (err)
                res.status(400).send(err);
            res.status(200).json(obj);
        });
    },

    filtrar: async (req, res) => {
        Compra.find({
            $or: [
                { codBarra: { $regex: req.params.filtro, $options: "i" } },
                { nome: { $regex: req.params.filtro, $options: "i" } },
                //{ preco: { $regex: req.params.filtro, $options: "i" } },
                //{ qtd: { $regex: req.params.filtro, $options: "i" } },
                //{ dataHora: { $regex: req.params.filtro, $options: "i" } },
            ],
        }, function (err, objetos) {
            if (err)
                res.status(400).send(err);
            res.json(objetos);
        }).sort({ nome: -1 }); // -1 decrescente 1 crescente

    },

};
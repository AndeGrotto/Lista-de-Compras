const mongoose = require("mongoose");
const CompraSchema = new mongoose.Schema({
    codBarra: { type: Number, required: true, unique: true },
    nome: { type: String, required: true },
    preco: { type: Number, required: true },
    qtd: { type: Number, required: true },
    dataHora: { type: Date, required: true },
});
module.exports = mongoose.model("Compra", CompraSchema);
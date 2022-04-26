import React, { useState } from 'react';

function ComprasForm(props) {
    // Declare variaveis de state
    const handleInputChange = (event) => {
        const { name, value } = event.target
        props.setCompra({ ...props.compra, [name]: value })
    }


    return (
        <div>
            <form>
                <div class="form-group">
                    <label>Código de Barras</label>
                    <input class="form-control" type="text" name="codBarras"
                        value={props.compra.codBarras} onChange={handleInputChange} />
                </div>
                <div class="form-group">
                    <label>Nome</label>
                    <input class="form-control" type="text" name="nome"
                        value={props.compra.nome} onChange={handleInputChange} />
                </div>
                <div class="form-group">
                    <label>preco</label>
                    <input class="form-control" type="number" name="preco"
                        value={props.compra.preco} onChange={handleInputChange} />
                </div>
                <div class="form-group">
                    <label>Quantidade</label>
                    <input class="form-control" type="number" name="qtd"
                        value={props.compra.qtd} onChange={handleInputChange} />
                </div>
                <div class="form-group">
                    <label>Data/Hora</label>
                    <input class="form-control" type="date" name="dataHora"
                        value={props.compra.dataHora} onChange={handleInputChange} />
                </div>
                <div class="form-group">
                    <button type="button" onClick={props.onClickSalvar}
                        className="btn btn-primary btn-sm">Salvar</button>
                    <button type="button" onClick={props.onClickCancelar}
                        className="btn btn-danger btn-sm">Cancelar</button>
                </div>
            </form>
        </div>
    );
}

export default ComprasForm;
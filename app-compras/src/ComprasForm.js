import React, { useState } from 'react';
import './Form.css';

function ComprasForm(props) {
    // Declare variaveis de state
    const handleInputChange = (event) => {
        const { name, value } = event.target
        props.setCompra({ ...props.compra, [name]: value })
    }


    return (
        <div>
            <form>
                <div class="form">
                    <div class="form-toggle"></div>
                    <div class="form-panel one">
                        <div class="form-header">
                            <h1>Cadastro de Produto</h1>
                        </div>
                        <div class="form-content">
                            <form>
                                <div class="form-group">
                                    <label>Código de Barras</label>
                                    <input class="form-control" type="number" name="codBarra"
                                        value={props.compra.codBarra} onChange={handleInputChange} />
                                </div>
                                <div class="form-group">
                                    <label>Nome</label>
                                    <input class="form-control" type="text" name="nome"
                                        value={props.compra.nome} onChange={handleInputChange} />
                                </div>
                                <div class="form-group">
                                    <label>Preço</label>
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
                                    <input class="form-control" type="datetime-local" name="dataHora"
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
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ComprasForm;
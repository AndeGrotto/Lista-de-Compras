import React, { useState } from 'react';
import Compras from './Compras';
import "bootstrap/dist/css/bootstrap.min.css";

function ComprasList(props) {
    return (
        <div className="App de Compras">
            <h4>MANUTENÇÃO DE COMPRAS</h4>

            <h4>Listagem de compras</h4>
            <button onClick={props.onClickAtualizar} type="button"
                class="btn btn-info btn-sm">Atualizar Lista</button>

            <button onClick={props.onClickInserir} type="button"
                class="btn btn-primary btn-sm">Inserir</button>

            <table className='table'>
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Código de Barras</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Quantidade</th>
                        <th>Data/Hora</th>
                    </tr>
                </thead>
                <tbody>
                    {props.compras.length > 0 ? (props.compras.map((o, index) => (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{o.codBarra}</td>
                            <td>{o.nome}</td>
                            <td>{o.preco}</td>
                            <td>{o.qtd}</td>
                            <td>{o.dataHora}</td>
                            <td>
                                <button onClick={() => props.onClickEditar(o.codBarra)}
                                    className="btn btn-warning btn-sm">Editar</button>
                                <button onClick={() => props.onClickExcluir(o.codBarra)}
                                    className="btn btn-danger btn-sm">Excluir</button>
                            </td>
                        </tr>
                    ))) : (
                        <tr>
                            <td colSpan={6
                            }>Nenhuma compra.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default ComprasList;
import React, { useState } from 'react';
import ComprasList from './ComprasList';
import ComprasForm from './ComprasForm';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function Compras() {

    // Declare variaveis de state
    let comprasList = [
        { codBarra: 22, nome: 'Batata', preco: 18.77, qtd: 3, dataHora: "22/05/2022" },
        { codBarra: 55, nome: 'Manga', preco: 2.44, qtd: 2, dataHora: "25/04/2022" },
    ]
    const [compras, setCompras] = useState(comprasList)

    const onClickAtualizar = () => {
        comprasList = [
            { codBarra: 22, nome: 'Batata', preco: 18.77, qtd: 3, dataHora: "22/05/2022" },
            { codBarra: 55, nome: 'Manga', preco: 2.44, qtd: 2, dataHora: "25/04/2022" },
            { codBarra: 788, nome: 'Beterraba', preco: 51.00, qtd: 12, dataHora: "26/04/2022" }
        ];
        setCompras(comprasList);
    }

    // operação inserir
    const initialState = { codBarra: null, nome: '', preco: '', qtd: '', dataHora: '' }
    const [compra, setCompra] = useState(initialState)
    const [editando, setEditando] = useState(false)
    const onClickInserir = () => {
        setCompra(initialState);
        setEditando(true);
    }

    // operação editar

    const onClickEditar = (codBarra) => {
        setCompra(compras.filter((compra) => compra.codBarra === codBarra)[0]);
        setEditando(true);
    }


    // operação excluir
    const onClickExcluir = (codBarra) => {
        setCompras(compras.filter((compra) => compra.codBarra !== codBarra));
    }

    const onClickSalvar = () => {
        console.log('Salvar ...');
        if (compra.codBarra == null) { // inclussão
            compra.codBarra = compras.length + 1
            setCompras([...compras, compra])
        } else { // alteração
            setCompras(compras.map((find) => (find.codBarra === compra.codBarra ? compra : find)))
        }
        setEditando(false);
    }
    const onClickCancelar = () => {
        console.log('Cancelou ...');
        setEditando(false);
    }

    if (!editando) {
        return (
            <div>
                <ComprasList compras={compras}
                    onClickAtualizar={onClickAtualizar}
                    onClickInserir={onClickInserir}
                    onClickEditar={onClickEditar}
                    onClickExcluir={onClickExcluir} />
            </div>
        );
    } else {
        return (
            <div>
                <ComprasForm compra={compra}
                    onClickSalvar={onClickSalvar}
                    onClickCancelar={onClickCancelar}
                    setCompra={setCompra} />
            </div>
        );
    }
}

export default Compras;
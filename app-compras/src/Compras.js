import React, { useState, useEffect, useRef } from 'react';
import ComprasList from './ComprasList';
import ComprasForm from './ComprasForm';
import CompraSrv from "./services/CompraSrv";

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

const apiURL = process.env.REACT_APP_API_URL;


function Compras() {

    const [compras, setCompras] = useState([])
    useEffect(() => {
        onClickAtualizar(); // ao inicializar execula método para atualizar
    }, []);

    const onClickAtualizar = () => {
        CompraSrv.listar().then(response => {
            setCompras(response.data);
            console.log("Compras atualizadas");
        }).catch(e => {
            console.log("Erro: " + e.message);
        });
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
        setCompra(compras.filter((compra) => compra.codBarra == codBarra)[0]);
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
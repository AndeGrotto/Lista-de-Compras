import React, { useState, useEffect, useRef, toastRef } from 'react';
import CompraSrv from "./services/CompraSrv";
import ComprasList from './ComprasList';
import ComprasForm from './ComprasForm';

import PrimeReact from 'primereact/api';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Toast } from 'primereact/toast';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';



import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function Compras() {

    const apiURL = process.env.REACT_APP_API_URL;

    const [compras, setCompras] = useState([])

    const toastRef = useRef();

    useEffect(() => {
        onClickAtualizar(); // ao inicializar execula método para atualizar
    }, []);


    // Atualizar lista
    const onClickAtualizar = () => {
        CompraSrv.listar().then(response => {
            setCompras(response.data);
            toastRef.current.show({
                severity: 'success',
                summary: 'Compras atualizadas',
                life: 2000
            });
        })
            .catch(e => {
                toastRef.current.show({
                    severity: 'error',
                    summary: e.message,
                    life: 3000
                });
            });
    }

    // operação salvar
    const onClickSalvar = () => {
        if (compra._id == null) { // inclussão
            CompraSrv.incluir(compra).then(response => {
                setEditando(false);
                onClickAtualizar();
                toastRef.current.show({ severity: 'success', summary: "Salvou", life: 2000 });
            })
                .catch(e => {
                    toastRef.current.show({ severity: 'error', summary: e.message, life: 4000 });
                });
        } else { // alteração
            CompraSrv.alterar(compra).then(response => {
                setEditando(false);
                onClickAtualizar();
                toastRef.current.show({ severity: 'success', summary: "Salvou", life: 2000 });
            })
                .catch(e => {
                    toastRef.current.show({ severity: 'error', summary: e.message, life: 4000 });
                });
        }
    }

    // operação excluir
    const confirmExcluir = (codBarra) => {
        CompraSrv.excluir(codBarra).then(response => {
            onClickAtualizar();
            toastRef.current.show({
                severity: 'success',
                summary: "Excluído", life: 2000
            });
        })
            .catch(e => {
                toastRef.current.show({
                    severity: 'error',
                    summary: e.message, life: 4000
                });
            });
    }

    const onClickExcluir = (codBarra) => {
        confirmDialog({
        message: 'Confirma a exclusão?',
        header: 'Confirmação',
        icon: 'pi pi-question',
        acceptLabel:'Sim',
        rejectLabel:'Não',
        acceptClassName: 'p-button-danger',
        accept: () => confirmExcluir(codBarra)
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
        setCompra(compras.filter((compra) => compra.codBarra === codBarra)[0]);
        setEditando(true);
    }

    const onClickCancelar = () => {
        console.log('Cancelou ...');
        setEditando(false);
    }

    if (!editando) {
        return (
            <div>
                <Toast ref={toastRef} />
                <ConfirmDialog/>
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
                <Toast ref={toastRef} />
                <ComprasForm compra={compra}
                    onClickSalvar={onClickSalvar}
                    onClickCancelar={onClickCancelar}
                    setCompra={setCompra} />
            </div>
        );
    }
}

export default Compras;
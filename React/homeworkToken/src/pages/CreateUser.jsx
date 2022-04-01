import React, { useEffect, useState } from 'react';
import api from '../api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function CreateUser() {
    const location = useLocation();
    const navigate = useNavigate();
    const [update, setUpdate] = useState(false)
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [cpf, setCpf] = useState('');



    let idPerson = location.pathname.substring(13);

    const userId = async () => {
        try {
            const { data } = await api.get(`pessoa/{idPessoa}?idPessoa=${idPerson}`)

            let formatDate = moment(data.dataNascimento).format('DD/MM/YYYY');

            setNome(data.nome);
            setEmail(data.email);
            maskDate(formatDate);
            maskCPF(data.cpf);

        } catch (error) {
            console.log(error);
        }
    }

    const updateUser = async (e) => {
        e.preventDefault()
        let formatDate = dataNascimento;
        formatDate = moment(formatDate, 'DD/MM/YYYY').format('YYYY-MM-DD')

        let formatCpf = cpf.split('.').join('');
        let newCpf = formatCpf.replace('-', '');

        const newPerson = {
            nome: nome,
            email: email,
            dataNascimento: formatDate,
            cpf: newCpf
        }
        try {
            const { data } = await api.put(`/pessoa/${idPerson}`, newPerson)
            console.log(data);
        } catch (error) {
            console.log('error');
        }
    }

    useEffect(() => {
        if (idPerson) {
            userId();
            setUpdate(true);
        }
    }, [])

    const maskCPF = value => {
        return setCpf(
            value.replace(/\D/g, "")
                .replace(/(\d{3})(\d)/, "$1.$2")
                .replace(/(\d{3})(\d)/, "$1.$2")
                .replace(/(\d{3})(\d{1,2})/, "$1-$2")
                .replace(/(-\d{2})\d+?$/, "$1"));
    };

    const maskDate = value => {
        return setDataNascimento(
            value.replace(/\D/g, "")
                .replace(/(\d{2})(\d)/, "$1/$2")
                .replace(/(\d{2})(\d)/, "$1/$2")
                .replace(/(\d{4})(\d)/, "$1"));
    };

    const notify = () => toast('Cadastrado com sucesso!!');
    const notifyError = () => toast('Erro ao cadastrar!!');

    async function createNewUser(e) {
        e.preventDefault();
        let formatData = dataNascimento;
        formatData = moment(formatData, 'DD/MM/YYYY').format('YYYY-MM-DD');

        let formatCpf = cpf.split('.').join('');
        let newCpf = formatCpf.replace('-', '');

        const newPerson = {
            nome: nome,
            dataNascimento: formatData,
            email: email,
            cpf: newCpf,
        }
        try {
            const { data } = await api.post('/pessoa', newPerson);
            console.log(data);
            notify()
            setTimeout(() => {
                navigate('/users')
            }, 6000);;

        } catch (error) {
            console.log('Ocorreu um erro');
            notifyError()
        }
    }



    return (
        <>
            <div>CreateUser</div>
            <form onSubmit={e => update ? updateUser(e) : createNewUser(e)}>
                <label htmlFor="nome">Nome: </label>
                <input value={nome} id="nome" name="nome" placeholder="Digite seu Nome:" onChange={(e) => setNome(e.target.value)} />

                <label htmlFor="email">Email</label>
                <input value={email} id="email" type="email" name="email" onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="dataNascimento">Data de Nascimento</label>
                <input value={dataNascimento} id="dataNascimento" name="dataNascimento" onChange={(e) => maskDate(e.target.value)} />

                <label htmlFor="cpf">Cpf</label>
                <input id="cpf" name="cpf" value={cpf} onChange={(e) => maskCPF(e.target.value)} />

                {
                    update ?
                        <button type="submit">
                            Atualizar
                        </button>
                        :
                        (
                            <div>

                                <button type="submit">
                                    Cadastrar
                                </button>
                                <ToastContainer />
                            </div>
                        )
                }

            </form>
        </>
    )
}

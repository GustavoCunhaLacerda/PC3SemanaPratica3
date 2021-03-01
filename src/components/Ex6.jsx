import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

export default function Ex6() {

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [logado, setLogado] = useState(false);

    const inputStyle = {
        width: "220px",
        height: "50px",
        margin: "20px"
    };

    const cadastrarUsuario = () => {
        if (localStorage.getItem(usuario)) alert('Esse usuario já possui cadastrado');
        else {
            localStorage.setItem(usuario, senha);
            alert('Cadastrado com sucesso')
        }

    }

    const entrarComUsuario = () => {
        if (localStorage.getItem(usuario) === senha) setLogado(true);
        else alert('Usuário ou senha incorretos');
    }

    if (!logado) {

        return (
            <div>

                <div>
                    <TextField
                        id="usuario"
                        onChange={e => setUsuario(e.target.value)}
                        label="Usuário"
                        variant="outlined"
                        style={inputStyle}
                    />
                </div>
                <div>
                    <TextField
                        id="senha"
                        type="password"
                        onChange={e => setSenha(e.target.value)}
                        label="Senha"
                        variant="outlined"
                        style={inputStyle}
                    />
                </div>

                <Button
                    onClick={() => entrarComUsuario()}
                    variant="contained"
                    size="medium"
                    style={{
                        backgroundColor: "#341f97",
                        color: "#fff",
                        marginRight: '20px'
                    }}
                >
                    entrar
                </Button>
                <Button
                    onClick={() => cadastrarUsuario()}
                    size="medium"
                    variant="outlined"
                >
                    cadastrar
                </Button>
            </div>
        );
    } else {
        return (
            <div>
                <p>Logado com {usuario}</p>
                <Button
                    onClick={() => {setLogado(false); setSenha(''); setUsuario('');}}
                    variant="contained"
                    size="medium"
                    style={{
                        backgroundColor: "#341f97",
                        color: "#fff",
                    }}
                >
                    sair
                </Button>
            </div>
        );
    }
}

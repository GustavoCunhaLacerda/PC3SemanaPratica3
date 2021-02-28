import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

export default function Ex6() {

    const [usuario, setUsuario] = useState();
    const [senha, setSenha] = useState();

    const inputStyle = {
        width: "220px",
        height: "50px",
        margin: "20px"
    };

    const cadastrarUsuario = () => {
        if(localStorage.getItem(usuario)) alert('Esse usuario já possui cadastrado');
        else {
            localStorage.setItem(usuario, senha);
        }

        console.log(localStorage)
    }

    return (
        <div>
            <div>
                <TextField
                    onChange={ e => setUsuario(e.target.value)}
                    label="Usuário"
                    variant="outlined"
                    style={inputStyle}
                />
            </div>
            <div>
                <TextField
                    onClick={ e => setSenha(e.target.value)}
                    label="Senha"
                    variant="outlined"
                    style={inputStyle}
                />
            </div>

            <Button
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
                onClick={cadastrarUsuario}
                size="medium"
                variant="outlined"
            >
                cadastrar
            </Button>


        </div>
    );
}

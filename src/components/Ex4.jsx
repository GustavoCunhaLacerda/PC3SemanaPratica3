import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

export default function Ex1() {

    const [qtdNumeros, setQtdNumeros] = useState(0);
    const [minimo, setMinimo] = useState(0);
    const [maximo, setMaximo] = useState(0);
    const [arrayOrd, setArrayOrd] = useState('[]');

    const inputStyle = {
        width: "200px",
        height: "50px",
        margin: "20px"
    };

    const getRndInteger = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    const arrayOrdenado = () => {
        let array = [];

        for (let i = 0; i < qtdNumeros; i++) {
            array.push(getRndInteger(parseInt(minimo), parseInt(maximo)));
        }

        let arrayOrdenado = array.sort(function (a, b) {
            return a - b
        });

        let auxArrayOrd = '[';
        for (let i = 0; i < qtdNumeros; i++) {
            if (i < qtdNumeros - 1) {
                auxArrayOrd += `${arrayOrdenado[i]}, `;
            } else {
                auxArrayOrd += `${arrayOrdenado[i]}`;
            }
        }
        auxArrayOrd += ']';
        setArrayOrd(auxArrayOrd);

    }

    return (
        <div>
            <div>
                <TextField
                    onChange={e => setQtdNumeros(e.target.value)}
                    type="number"
                    label="Quantidade de números"
                    variant="outlined"
                    style={inputStyle}
                />
                <TextField
                    onChange={e => setMinimo(e.target.value)}
                    type="number"
                    label="Valor mínimo"
                    variant="outlined"
                    style={inputStyle}
                />
                <TextField
                    onChange={e => setMaximo(e.target.value)}
                    type="number"
                    label="Valor máximo"
                    variant="outlined"
                    style={inputStyle}
                />
            </div>

            <Button
                onClick={_ => arrayOrdenado()}
                variant="contained"
                size="medium"
                style={{
                    backgroundColor: "#27ae60",
                    color: "#fff"
                }}
            >
                calcular
            </Button>

            <p>
                {arrayOrd}
            </p>
        </div>
    );
}

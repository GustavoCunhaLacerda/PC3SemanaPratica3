import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

export default function Ex2() {

    const fat = (n) => {
        if (!n) return 0;
        if(n === 0 || n === 1) return 1;
        else return n * fat(n-1);
    }

    const [fatorial, setFatorial] = useState();
    const [tempo, setTempo] = useState();
    const [numero, setNumero] = useState();

    const inputStyle = {
        width: "200px",
        height: "50px",
        margin: "20px"
    };

    const handleNumero = (e) => {
        setNumero(e.target.value);
        setFatorial(null);
    } 

    const calcular = () => {
        const inicio = (new Date()).getTime();
        // console.log(inicio);
        setFatorial(fat(numero));
        const fim = (new Date()).getTime();
        // console.log(fim);
        setTempo(fim - inicio);
    } 

    return (
        <div>

            <TextField
                type="number"
                label="Calcular o fatorial de"
                variant="outlined"
                style={inputStyle}
                onChange={handleNumero}
            />

            <div>
                <Button
                    variant="contained"
                    size="medium"
                    style={{
                        backgroundColor: "#8e44ad",
                        color: "#fff"
                    }}
                    onClick={calcular}
                >
                    calcular
                </Button>
            </div>

            <p>
                { fatorial ? `${numero}! = ${fatorial} (${tempo} milisegundos)` : null}
            </p>
        </div>
    );
}

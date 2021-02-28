import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

export default function Ex1() {

    const [numeros, setNumeros] = useState([0, 0]);
    const [numerosEntreMinEMax, setNumerosEntreMinEMax] = useState([]);

    const menor = (event) => {
        setNumeros([parseInt(event.target.value), numeros[1]]);
    }

    const maior = (event) => {
        setNumeros([numeros[0], parseInt(event.target.value)]);
    }

    const calcularNumerosEntreMinEMax = () => {
        let aux = [];

        for (let i = numeros[0]+1; i < numeros[1]; i++) {
            if (i % 2 === 0 || i % 3 === 0) {
                aux.push(`${i} `);
            }
        }
        setNumerosEntreMinEMax(aux);
    }



    const inputStyle = {
        width: "200px",
        height: "50px",
        margin: "20px"
    };

    return (
        <div>

            <TextField id="ex1-minimo"
                type="number"
                label="mínimo" 
                variant="outlined"
                style={inputStyle} 
                onChange={menor}
                />
            <TextField id="ex1-minimo"
                type="number"
                label="máximo" 
                variant="outlined"
                style={inputStyle} 
                onChange={maior}
                />

            <p>
                { 
                    numeros[0] < numeros[1] ? 
                        'Mínimo é menor' :
                        'Mínimo não é menor'
                }
            </p>

            <Button
                onClick={ _ => calcularNumerosEntreMinEMax()}
                variant="contained"
                size="medium"
                style={{
                    backgroundColor: "#2980b9",
                    color: "#fff"
                }}
                disabled={!(numeros[0] < numeros[1])}
                >
                calcular
            </Button>

            <p>
                {numerosEntreMinEMax}
            </p>
        </div>
    );
}

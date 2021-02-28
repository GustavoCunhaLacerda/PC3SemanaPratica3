import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

export default function Ex5() {

    const [ladoA, setLadoA] = useState(0);
    const [ladoB, setLadoB] = useState(0);
    const [ladoC, setLadoC] = useState(0);
    const [resultadoTri, setResultadoTri] = useState('');

    const inputStyle = {
        width: "200px",
        height: "50px",
        margin: "20px"
    };

    const avaliarTri = () => {
        if(ladoA === ladoB  && ladoA === ladoC) setResultadoTri('Equilátero');
        else if(ladoA === ladoB) setResultadoTri('Isósceles');
        else if(ladoB === ladoC) setResultadoTri('Isósceles');
        else if(ladoA === ladoC) setResultadoTri('Isósceles');
        else setResultadoTri('Escaleno');
    };

    return (
        <div>
            <div>
                <TextField
                    onChange={e => setLadoA(e.target.value)}
                    type="number"
                    label="Lado A"
                    variant="outlined"
                    style={inputStyle}
                />
                <TextField
                    onChange={e => setLadoB(e.target.value)}
                    type="number"
                    label="Lado B"
                    variant="outlined"
                    style={inputStyle}
                />
                <TextField
                    onChange={e => setLadoC(e.target.value)}
                    type="number"
                    label="Lado C"
                    variant="outlined"
                    style={inputStyle}
                />
            </div>

            <Button
                onClick={_ => avaliarTri()}
                variant="contained"
                size="medium"
                style={{
                    backgroundColor: "#2c3e50",
                    color: "#fff"
                }}
            >
                avaliar
            </Button>

            <p>
                {resultadoTri}
            </p>
        </div>
    );
}

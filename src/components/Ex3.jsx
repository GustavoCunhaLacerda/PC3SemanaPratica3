import React, { useState } from 'react';
import { Button, Table, TableRow, TableHead, TableContainer, TableCell, TableBody } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

export default function Ex3() {

    const [relatorio, setRelatorio] = useState([]);


    const gerarAlunos = () => {
        let alunosAux = [];
        for (let i = 0; i < 20; i++) {
            const alunoAux = `Aluno ${getRndInteger(0, 9)}${getRndInteger(0, 9)}${getRndInteger(0, 9)}${getRndInteger(0, 9)}${getRndInteger(0, 9)}`;
            const notaAux = getRndInteger(0, 100);
            const statusAux = notaAux >= 60 ? 'Aprovado' : 'Reprovado';
            alunosAux.push({
                aluno: alunoAux,
                nota: notaAux,
                status: statusAux
            });
        }
        return alunosAux;
    }

    const getRndInteger = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }


    const gerarRelatorio = () => {
        const alunos = gerarAlunos();

        let relatorioAux = [];
        for (let i = 0; i < alunos.length; i++) {
            relatorioAux.push(
                <TableRow key={i}>
                    <TableCell align="left">{alunos[i].aluno}</TableCell>
                    <TableCell align="left">{alunos[i].nota}</TableCell>
                    <TableCell align="left">{alunos[i].status}</TableCell>
                </TableRow>
            );
        }

        setRelatorio(relatorioAux);

        let quantidadeAprovados = 0;
        alunos.forEach( (a) => { 
            if(a.status === 'Aprovado') quantidadeAprovados++ 
        });

        let quantidadeReprovados = 20 - quantidadeAprovados;

        document.getElementById('ex3-resp').innerHTML = `
            APROVADOS: ${quantidadeAprovados} (${100*quantidadeAprovados/20}%) REPROVADOS: ${quantidadeReprovados} (${100*quantidadeReprovados/20}%)
        `;
    }

    return (
        <div>

            <div>
                <Button
                    variant="contained"
                    size="medium"
                    style={{
                        backgroundColor: "#e74c3c",
                        color: "#fff"
                    }}
                    onClick={gerarRelatorio}
                >
                    gerar relatório
                </Button>
            </div>

            <TableContainer component={Paper}>
                <Table size="small" aria-label="a dense table"> 
                    <TableHead>
                        <TableRow>
                            <TableCell>Aluno</TableCell>
                            <TableCell align="left">Nota</TableCell>
                            <TableCell align="left">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {relatorio}
                    </TableBody>
                </Table>
            </TableContainer>

            <div>
                <p id="ex3-resp"></p>
            </div>


        </div>
    );
}

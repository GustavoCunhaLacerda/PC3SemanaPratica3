import './App.css';
import React from 'react';
import { Link } from '@material-ui/core';

import Card from './components/layout/Card';
import Ex1 from './components/Ex1';
import Ex2 from './components/Ex2';
import Ex3 from './components/Ex3';
import Ex4 from './components/Ex4';
import Ex5 from './components/Ex5';
import Ex6 from './components/Ex6';


export default function App(props) {
    return (
        <div className="App">

            <h1>Programação de Computadores 3 - Semana Prática 3</h1>
            <h2>Prof: José Gonçalo</h2>
            <h2>Aluno: Gustavo Cunha Lacerda</h2>
            <h3>Código fonte disponível em <Link href="https://github.com/GustavoCunhaLacerda/PC3SemanaPratica3" color="inherit" target="_blank">github.com/GustavoCunhaLacerda/PC3Trab5</Link>
            </h3>

            <div className="Cards">
                <Card title="Exercício #01" color="#2980b9">
                    <Ex1></Ex1>
                </Card>
                <Card title="Exercício #02" color="#8e44ad">
                    <Ex2></Ex2>
                </Card>
                <Card title="Exercício #03" color="#e74c3c">
                    <Ex3></Ex3>
                </Card>
                <Card title="Exercício #04" color="#27ae60">
                    <Ex4></Ex4>
                </Card>
                <Card title="Exercício #06" color="#2c3e50">
                    <Ex5></Ex5>
                </Card>
                <Card title="Exercício #06" color="#341f97">
                    <Ex6></Ex6>
                </Card>
            </div>

        </div>
    );
};
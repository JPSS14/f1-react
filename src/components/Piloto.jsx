import React from "react"
import "./Piloto.css"
import norris from "../images/lando-norris.png"

export default function Piloto(props) {
    const imagem = props.imagem;
    const pilotoStyle = {
        backgroundColor: props.colorP || "#222",
        borderColor: props.colorS || "#999"
    }
    const velocidade = props.velocidade
    let tempoTotal = props.tempoTotal
    let minuto = 0;
    let segundo = 0;
    let hora = 0;
    while (tempoTotal >= 1000) {
        tempoTotal -= 1000;
        segundo++;
    };
    while (segundo >= 60) {
        segundo -= 60;
        minuto++;
    }
    while (minuto >= 60) {
        minuto -= 60;
        hora++;
    }

    return (
        <div className="piloto" style={pilotoStyle}>
            <h2>{props.posicao}º {props.nome} {props.numero}</h2>
            <div className="content">
                <img src={props.imagem} alt={props.nome} title={props.nome}></img>
                <p> Tempo = {hora}h  {minuto}m  {segundo}s {tempoTotal.toFixed(0)}ms</p>
            </div>
        </div>
    )
}
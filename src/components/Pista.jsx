import React from "react"
import Piloto from "./Piloto"
import "./Pista.css"
import norris from "../images/lando-norris.png"
import ricciardo from "../images/daniel-ricciardo.png"
import raikkonen from "../images/kimi-raikkonen.png"
import vettel from "../images/sebastian-vettel.png"
import latifi from "../images/nicholas-latifi.png"
import grosjean from "../images/romain-grosjean.png"
import gasly from "../images/pierre-gasly.png"
import perez from "../images/sergio-perez.png"
import leclerc from "../images/charles-leclerc.png"
import stroll from "../images/lance-stroll.png"
import magnussen from "../images/kevin-magnussen.png"
import albon from "../images/alexander-albon.png"
import kvyat from "../images/daniil-kvyat.png"
import ocon from "../images/esteban-ocon.png"
import verstappen from "../images/max-verstappen.png"
import hamilton from "../images/lewis-hamilton.png"
import sainz from "../images/carlos-sainz.png"
import russell from "../images/george-russell.png"
import bottas from "../images/valtteri-bottas.png"
import giovinazzi from "../images/antonio-giovinazzi.png"


export default function Pista(props) {
//    const m = [[3, 4, 5], ["Daniel Ricardo", "Lando Norris", "Sebastian Vettel"], [7, 8, 9]]


    let t = [{ "nome": "Daniel Ricciardo", "numero": 3, "tempo": 0, "velocidade": 0, "colorP": "#000", "colorS": "#feed01", "posicao": 0, "imagem":"{norris}"}, { "nome": "Lando Norris", "numero": 4, "tempo": 0, "velocidade": 0, "colorP": "#fe6b03", "colorS": "#093277", "posicao": 0, "imagem":"http://localhost:3000/static/media/lando-norris.1037c6fa.png" }, { "nome": "Sebastian Vettel", "numero": 5, "tempo": 0, "velocidade": 0, "colorP": "#c40000", "colorS": "#c40000", "posicao": 0, "imagem":"" }, { "nome": "Nicholas Latifi", "numero": 6, "tempo": 0, "velocidade": 0, "colorP": "#6ca3f9", "colorS": "#6ca3f9", "posicao": 0, "imagem":"" },{ "nome": "Kimi Raikkonen", "numero": 7, "tempo": 0, "velocidade": 0, "colorP": "#b50000", "colorS": "#000", "posicao": 0, "imagem":"" },{ "nome": " Romain Grosjean", "numero": 8, "tempo": 0, "velocidade": 0, "colorP": "#000", "colorS": "#000", "posicao": 0, "imagem":"" },{ "nome": "Pierre Gasly", "numero": 10, "tempo": 0, "velocidade": 0, "colorP": "#041326", "colorS": "#041326", "posicao": 0, "imagem":"" },{ "nome": "Sergio Perez", "numero": 11, "tempo": 0, "velocidade": 0, "velocidade": 0, "colorP": "#d4406a", "colorS": "#d4406a", "posicao": 0, "imagem":"" },{ "nome": "Charles Leclerc", "numero": 16, "tempo": 0, "velocidade": 0, "colorP": "#c40000", "colorS": "#c40000", "posicao": 0, "imagem":"" },{ "nome": "Lance Stroll", "numero": 18, "tempo": 0, "velocidade": 0, "colorP": "#d4406a", "colorS": "#d4406a", "posicao": 0, "imagem":"" },{ "nome": "Kevin Magnussen", "numero": 20, "tempo": 0, "velocidade": 0, "colorP": "#000", "colorS": "#000", "posicao": 0, "imagem":"" },{ "nome": "Alexander Albon", "numero": 23, "tempo": 0, "velocidade": 0, "colorP": "#070918", "colorS": "#fe1a21", "posicao": 0, "imagem":"" },{ "nome": "Daniil Kvyat", "numero": 26, "tempo": 0, "velocidade": 0, "colorP": "#041326", "colorS": "#041326", "posicao": 0, "imagem":"" },{ "nome": "Esteban Ocon", "numero": 31, "tempo": 0, "velocidade": 0, "colorP": "#000", "colorS": "#feed01", "posicao": 0, "imagem":"" },{ "nome": "Max Verstappen", "numero": 33, "tempo": 0, "velocidade": 0, "colorP": "#070918", "colorS": "#fe1a21", "posicao": 0, "imagem":"" },{ "nome": "Lewis Hamilton", "numero": 44, "tempo": 0, "velocidade": 0, "colorP": "#000", "colorS": "#0ec2ce", "posicao": 0, "imagem":"" },{ "nome": "Carlos Sainz Jr.", "numero": 55, "tempo": 0, "velocidade": 0, "colorP": "#fe6b03", "colorS": "#093277", "posicao": 0, "imagem":"" },{ "nome": "George Russell", "numero": 63, "tempo": 0, "velocidade": 0, "colorP": "#6ca3f9", "colorS": "#6ca3f9", "posicao": 0, "imagem":"" },{ "nome": "Valtteri Bottas", "numero": 77, "tempo": 0, "velocidade": 0, "colorP": "#000", "colorS": "#0ec2ce", "posicao": 0, "imagem":"" },{ "nome": "Antonio Giovinazzi", "numero": 99, "tempo": 0, "velocidade": 0, "colorP": "#b50000", "colorS": "#000", "posicao": 0, "imagem":"" }]

    t[0].imagem = ricciardo
    t[1].imagem = norris
    t[2].imagem = vettel
    t[3].imagem = latifi
    t[4].imagem = raikkonen
    t[5].imagem = grosjean
    t[6].imagem = gasly
    t[7].imagem = perez
    t[8].imagem = leclerc
    t[9].imagem = stroll
    t[10].imagem = magnussen
    t[11].imagem = albon
    t[12].imagem = kvyat
    t[13].imagem = ocon
    t[14].imagem = verstappen
    t[15].imagem = hamilton
    t[16].imagem = sainz
    t[17].imagem = russell
    t[18].imagem = bottas
    t[19].imagem = giovinazzi

    let i, j, tempoTotal = 0, velocidade = 0;
    const distancia = 4309;
    for (i = 0; i < 71; i++) {
        for (j = 0; j < 20; j++) {
            velocidade = parseFloat(222 + (Math.random() * (10 - 1) + 1));
            t[j].tempo += parseFloat((distancia / velocidade) * 3600);
            tempoTotal = t[j].tempo;
            t[j].velocidade = (t[j].velocidade+velocidade)/(j+1);
        }
    }

    t.sort(function (a, b) {
        if (a.tempo > b.tempo) {
            return 1;
        }
        if (a.tempo < b.tempo) {
            return -1;
        }
        return 0
    });

    

    return (
        <div className="pista">   
            <Piloto nome={t[0].nome} tempoTotal={t[0].tempo} velocidade={t[0].velocidade} numero={t[0].numero} colorP={t[0].colorP} colorS={t[0].colorS} posicao={1} imagem={t[0].imagem}/>
            <Piloto nome={t[1].nome} tempoTotal={t[1].tempo} velocidade={t[1].velocidade} numero={t[1].numero} colorP={t[1].colorP} colorS={t[1].colorS} posicao={2} imagem={t[1].imagem}/>
            <Piloto nome={t[2].nome} tempoTotal={t[2].tempo} velocidade={t[2].velocidade} numero={t[2].numero} colorP={t[2].colorP} colorS={t[2].colorS} posicao={3} imagem={t[2].imagem}/>
            <Piloto nome={t[3].nome} tempoTotal={t[3].tempo} velocidade={t[3].velocidade} numero={t[3].numero} colorP={t[3].colorP} colorS={t[3].colorS} posicao={4} imagem={t[3].imagem}/>
            <Piloto nome={t[4].nome} tempoTotal={t[4].tempo} velocidade={t[4].velocidade} numero={t[4].numero} colorP={t[4].colorP} colorS={t[4].colorS} posicao={5} imagem={t[4].imagem}/>
            <Piloto nome={t[5].nome} tempoTotal={t[5].tempo} velocidade={t[5].velocidade} numero={t[5].numero} colorP={t[5].colorP} colorS={t[5].colorS} posicao={6} imagem={t[5].imagem}/>
            <Piloto nome={t[6].nome} tempoTotal={t[6].tempo} velocidade={t[6].velocidade} numero={t[6].numero} colorP={t[6].colorP} colorS={t[6].colorS} posicao={7} imagem={t[6].imagem}/>
            <Piloto nome={t[7].nome} tempoTotal={t[7].tempo} velocidade={t[7].velocidade} numero={t[7].numero} colorP={t[7].colorP} colorS={t[7].colorS} posicao={8} imagem={t[7].imagem}/>
            <Piloto nome={t[8].nome} tempoTotal={t[8].tempo} velocidade={t[8].velocidade} numero={t[8].numero} colorP={t[8].colorP} colorS={t[8].colorS} posicao={9} imagem={t[8].imagem}/>
            <Piloto nome={t[9].nome} tempoTotal={t[9].tempo} velocidade={t[9].velocidade} numero={t[9].numero} colorP={t[9].colorP} colorS={t[9].colorS} posicao={10} imagem={t[9].imagem}/>
            <Piloto nome={t[10].nome} tempoTotal={t[10].tempo} velocidade={t[10].velocidade} numero={t[10].numero} colorP={t[10].colorP} colorS={t[10].colorS} posicao={11} imagem={t[10].imagem}/>
            <Piloto nome={t[11].nome} tempoTotal={t[11].tempo} velocidade={t[11].velocidade} numero={t[11].numero} colorP={t[11].colorP} colorS={t[11].colorS} posicao={12} imagem={t[11].imagem}/>
            <Piloto nome={t[12].nome} tempoTotal={t[12].tempo} velocidade={t[12].velocidade} numero={t[12].numero} colorP={t[12].colorP} colorS={t[12].colorS} posicao={13} imagem={t[12].imagem}/>
            <Piloto nome={t[13].nome} tempoTotal={t[13].tempo} velocidade={t[13].velocidade} numero={t[13].numero} colorP={t[13].colorP} colorS={t[13].colorS} posicao={14} imagem={t[13].imagem}/>
            <Piloto nome={t[14].nome} tempoTotal={t[14].tempo} velocidade={t[14].velocidade} numero={t[14].numero} colorP={t[14].colorP} colorS={t[14].colorS} posicao={15} imagem={t[14].imagem}/>
            <Piloto nome={t[15].nome} tempoTotal={t[15].tempo} velocidade={t[15].velocidade} numero={t[15].numero} colorP={t[15].colorP} colorS={t[15].colorS} posicao={16} imagem={t[15].imagem}/>
            <Piloto nome={t[16].nome} tempoTotal={t[16].tempo} velocidade={t[16].velocidade} numero={t[16].numero} colorP={t[16].colorP} colorS={t[16].colorS} posicao={17} imagem={t[16].imagem}/>
            <Piloto nome={t[17].nome} tempoTotal={t[17].tempo} velocidade={t[17].velocidade} numero={t[17].numero} colorP={t[17].colorP} colorS={t[17].colorS} posicao={18} imagem={t[17].imagem}/>
            <Piloto nome={t[18].nome} tempoTotal={t[18].tempo} velocidade={t[18].velocidade} numero={t[18].numero} colorP={t[18].colorP} colorS={t[18].colorS} posicao={19} imagem={t[18].imagem}/>
            <Piloto nome={t[19].nome} tempoTotal={t[19].tempo} velocidade={t[19].velocidade} numero={t[19].numero} colorP={t[19].colorP} colorS={t[19].colorS} posicao={20} imagem={t[19].imagem}/>
        </div>
    )
}
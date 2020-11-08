import React from "react"
import "./App.css"
import "./components/Piloto"
import Pista from "./components/Pista"

export default function App(props) {

  return (
    <div className="app">
      <h1>F1 2020: GP DE INTERLAGOS</h1>
      <Pista></Pista>
    </div>
  )
}
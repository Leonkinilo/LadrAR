import React, { Component, useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";
// const API = axios.create({
//   baseURL: `${"http://ladr-ar.herokuapp.com/home"}`
// });



export default function Home() {
  const [data, setData] = useState([])
  async function getdatos() {
    const response = await axios.get("https://ladr-ar.herokuapp.com/home");
    setData(response.data)
    console.log(response.data);
  }
  useEffect(() => {
    getdatos();
  }, [])
  return (

    <div>
      {data.length !== 0 && data.map((perrito, i) => (
        <div>
          <p>Perrito {i} </p>
          <p>Nombre: {perrito.nombre}</p>
          <p>Tipo: {perrito.tipo}</p>
          <p>Descripcion: {perrito.descripcion}</p>
          <p>Latitud: {perrito.latitud}</p>
          <p>Longitud: {perrito.longitud}</p>
          <p>Creador: {perrito.creador}</p>
          <p>Contacto: {perrito.contacto}</p>
          <br/>
          <br/>
        </div>
      ))}
    </div>
  )
}

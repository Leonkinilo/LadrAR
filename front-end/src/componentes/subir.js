import React, { Component, useEffect, useState } from 'react'
import { InputGroup, FormControl, Button } from "react-bootstrap"
import axios from "axios";


export default function Subir() {

    const [newPost, setNewPost] = React.useState({
        "nombre" : "Juancho",
        "latitud": 762134578145,
        "longitud": 873693,
        "descripcion" : "grande y rubio",
        "contacto" : "85654432",
        "tipo" : "perrera",
        "creador" : "grita"
    });
    
    const sendPostRequest = async () => {
        try {
            const resp = await axios.post('https://ladr-ar.herokuapp.com/home', newPost);
            console.log(resp.newPost);
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    };
    
    // React.useEffect(() => {
    //     sendPostRequest();
    // }, []);
   
    return (
        <>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Nombre</InputGroup.Text>
                <FormControl
                    placeholder="Nombre"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Latitud</InputGroup.Text>
                <FormControl
                    placeholder="Latitud"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Longitud</InputGroup.Text>
                <FormControl
                    placeholder="Longitud"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Descripcion</InputGroup.Text>
                <FormControl
                    placeholder="Descripcion"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Contacto</InputGroup.Text>
                <FormControl
                    placeholder="Contacto"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Tipo</InputGroup.Text>
                <FormControl
                    placeholder="Tipo"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Creador</InputGroup.Text>
                <FormControl
                    placeholder="Creador"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>

            <Button variant="dark" align="self-center" onClick={() => sendPostRequest()}> GUARDAR </Button>
        </>
    )
}

export { Subir }

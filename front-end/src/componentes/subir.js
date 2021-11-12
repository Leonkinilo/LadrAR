import React, { Component, useEffect, useState } from 'react'
import { InputGroup, FormControl, Button } from "react-bootstrap"
import axios from "axios";


export default function Subir() {
    const newPost = {
    Nombre: 'Fred',
    Tipo: 'Flintstone',
    Descrpcion: 'tu madre',
    Latitud: 7624367,
    Longitud: 478365,
    Creador: 'yo',
    Contacto: 'grita soy puto',
    };
    
    const sendPostRequest = async () => {
        try {
            const resp = await axios.post('https://ladr-ar.herokuapp.com/home', newPost);
            console.log(resp.data);
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    };
    sendPostRequest();
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

            <Button variant="dark" align="self-center"> GUARDAR </Button>
        </>
    )
}

export { Subir }

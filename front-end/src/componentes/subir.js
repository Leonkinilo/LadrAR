import React, { Component } from 'react'
import { InputGroup, FormControl, Form, Button} from "react-bootstrap"

export class subir extends Component {
    render() {
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

                <Button variant="dark">GUARDAR</Button>
            </>
        )
    }
}

export default subir

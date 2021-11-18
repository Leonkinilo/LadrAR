import React, { Component, useEffect, useState } from 'react'
import { InputGroup, FormControl, Button } from "react-bootstrap"
import axios from "axios";


export default function Subir() {

    const [newPost, setNewPost] = useState({
		nombre: '',
		latitud: '',
		longitud: '',
		descripcion: '',
		contacto: '',
		tipo: '',
		creador: '',
	});

	const changeProperty = (name, value) => {
		setNewPost({
			...newPost,
			[name]: value,
		});
	};

    
    const sendPostRequest = async () => {
        try {
            const resp = await axios.post('https://ladr-ar.herokuapp.com/home', newPost);
            console.log(resp.data);
        } 
        catch (err) {
            // Handle Error Here
            console.error(err);
        }
        setNewPost({
			nombre: '',
			latitud: '',
			longitud: '',
			descripcion: '',
			contacto: '',
			tipo: '',
			creador: '',
		});
    };
    
    // React.useEffect(() => {
    //     sendPostRequest();
    // }, []);
   
    return (
        <div className='p-4'>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Nombre</InputGroup.Text>
                <FormControl
					value={newPost.nombre}
					onChange={e => changeProperty('nombre', e.target.value)}
					placeholder='Nombre'
					aria-label='Username'
					aria-describedby='basic-addon1'
				/>
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Latitud</InputGroup.Text>
                <FormControl
					value={newPost.latitud}
					type='number'
					onChange={e => changeProperty('latitud', +e.target.value)}
					placeholder='Latitud'
					aria-label='Username'
					aria-describedby='basic-addon1'
				/>
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Longitud</InputGroup.Text>
                <FormControl
					value={newPost.longitud}
					type='number'
					onChange={e => changeProperty('longitud', +e.target.value)}
					placeholder='Longitud'
					aria-label='Username'
					aria-describedby='basic-addon1'
				/>
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Descripcion</InputGroup.Text>
                <FormControl
					value={newPost.descripcion}
					onChange={e => changeProperty('descripcion', e.target.value)}
					placeholder='Descripcion'
					aria-label='Username'
					aria-describedby='basic-addon1'
				/>
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Contacto</InputGroup.Text>
                <FormControl
					value={newPost.contacto}
					onChange={e => changeProperty('contacto', e.target.value)}
					placeholder='Contacto'
					aria-label='Username'
					aria-describedby='basic-addon1'
				/>
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Tipo</InputGroup.Text>
                <FormControl
					value={newPost.tipo}
					onChange={e => changeProperty('tipo', e.target.value)}
					placeholder='Tipo'
					aria-label='Username'
					aria-describedby='basic-addon1'
				/>
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Creador</InputGroup.Text>
                <FormControl
					value={newPost.creador}
					onChange={e => changeProperty('creador', e.target.value)}
					placeholder='Creador'
					aria-label='Username'
					aria-describedby='basic-addon1'
				/>
            </InputGroup>

            <Button variant='dark' align='self-center' onClick={() => sendPostRequest()}>
				{' '}
				GUARDAR{' '}
			</Button>
        </div>
    )
}

export { Subir }

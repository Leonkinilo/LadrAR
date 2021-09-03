import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/'>
                        LadrAR
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link className="nav-link" to='/perros'>
                                Encontre un perro
                                </Link>
                            </li>
                            <li class="nav-item">
                            <Link className="nav-link" to='/Hogares'>
                                Hogares
                                </Link>
                            </li>
                            <li class="nav-item">
                            <Link className="nav-link" to='/usuarios'>
                                Crea tu cuenta
                                </Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

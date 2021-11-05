import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class navigation extends Component {
    render() {
        return (
            <nav>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to='/'>
                            Base de Datos
                        </Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <Link className="navbar-brand" to='/subir'>
                                        Subir Datos
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </nav>

        )
    }
}
import React from 'react'
import Styles from "./header.module.css"

const index = () => {
    return (
            <nav className="color_green navbar navbar-expand-md navbar-light align-items-center ">
                <div className="color_green container-fluid ">
                    <a className="navbar-brand " href="#">Agrolivery</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`${Styles.collapse_navbar}collapse navbar-collapse`} id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categorias
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <a className="dropdown-item" href="#">Action</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Another action</a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Ofertas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Historial</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Vender</a>
                            </li>
                        </ul>


                    </div>
                    <div className="d-flex">
                    <form class="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                    </div>
                    <div className='d-flex'>
                    <button type="button" className="btn btn-square d-flex">
                            <i class="fas fa-sign-in-alt"></i>
                        </button>
                        <button type="button" className="btn btn-square d-flex">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button type="button" className="btn btn-square d-flex">
                            <i class="fas fa-cart-plus"></i>
                        </button>
                        </div>
                </div>
            </nav>
    )
}

export default index
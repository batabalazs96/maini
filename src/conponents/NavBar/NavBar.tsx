import React, { useState } from 'react'
import './NavBar.scss'

const NavBar = () => {
    const [number, setNumber] = useState(0);
    const [price, setPrice] = useState(0);


    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <a className="navbar-brand text-maini oregano " id="logo" href="https://maini.hu">Maini</a>
                    </div>
                    <div className="col">
                        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="col">
                        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link" href="#">Sale</a>
                                <a className="nav-link" href="#">Új</a>
                                <a className="nav-link" href="#">Kedvenceitek</a>
                                <a className="nav-link" href="#">Ruhák</a>
                                <a className="nav-link disabled" href="#" aria-disabled="true">Disabled</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <form className="d-flex ">
                            <input className="me-3" id="navbar-search-input" type=" search" placeholder="Keresés" aria-label="Search" />
                            <button className="btn btn-maini text-white rounded-circle " type="submit"><i className="bi bi-search"></i></button>
                        </form>
                    </div>
                    <div className="col">
                        <div id="nav-cart" className="ms-5" onClick={() => (setNumber(number + 1), setPrice(number * 1500))}>
                            <span className="pe-2">{price} Ft</span>
                            <div>
                                <span className="cart-icon"><i className="bi bi-cart"></i></span>
                                <span className="icon-badge">{number}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header >
    )
}
export default NavBar
import React, { useState } from 'react'
import './NavBar.scss'
import { useTranslation } from 'react-i18next';
import '../../languages/config'

const NavBar = () => {
    const { t } = useTranslation(['mainPage']);
    const [number, setNumber] = useState(0);
    const [price, setPrice] = useState(0);


    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow px-1 px-sm-5 d-flex flex-column justify-content-center">
                <div className="row container-fluid px-0 flex-wrap">
                    <div className="col-4 col-md-4 order-2 order-md-1">
                        <a className="navbar-brand text-maini oregano mx-0 d-flex justify-content-center justify-content-md-start" id="logo" href="https://maini.hu">{t('mainPage:navbar.logo')}</a>
                    </div>
                    <div className="col-4 d-md-none order-1 order-md-5">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="d-md-flex col-md-12 collapse navbar-collaps order-5 order-md-6" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link" >{t('mainPage:navbar.sale')}</a>
                            <a className="nav-link" >{t('mainPage:navbar.new')}</a>
                            <a className="nav-link" >Kedvenceitek</a>
                            <a className="nav-link" >Ruhák</a>
                            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"> Dropdown large  </a>
                                <div className="dropdown-menu dropdown-large p-4">
                                    Content of dropwodn Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                    proident
                                </div> 
                            </li>
                        </div>
                    </div>
                    <div className="col-4 col-md-4 order-3 order-md-4 pe-4">
                        <div className="d-flex justify-content-end" id="nav-cart" onClick={() => (setNumber(number + 1), setPrice(number * 1500))}>
                            <span className="d-none d-md-block pe-2">{price} Ft</span>
                            <div>
                                <span className="cart-icon"><i className="bi bi-cart"></i></span>
                                <span className="icon-badge">{number}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 order-4 order-md-3">
                        <form className="d-flex">
                            <input className="me-3 flex-grow-1" id="navbar-search-input" type=" search" placeholder="Keresés" aria-label="Search" />
                            <button className="btn btn-maini text-white rounded-circle" type="submit"><i className="bi bi-search"></i></button>
                        </form>
                    </div>
                </div>

            </nav>
        </header >
    )
}
export default NavBar
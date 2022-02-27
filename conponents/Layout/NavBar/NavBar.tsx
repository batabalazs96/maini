import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import '../../../languages/config'

const NavBar = () => {
    const { t } = useTranslation(['mainPage']);
    const [number, setNumber] = useState(0);
    const [price, setPrice] = useState(0);


    return (
        <>
            <div className='shipping-info'>
                <h4 className="text-white text-center py-2">GLS HÁZHOZSZÁLLÍTÁS ORSZÁGOSAN 3 NAPON BELÜL</h4>
            </div>
            <header className="sticky-top">
                <nav className="navbar sticky navbar-expand-lg navbar-light bg-white nav-shadow px-1 px-sm-5 d-flex flex-column justify-content-center py-1 pb-md-0 pt-md-3">
                    <div className="row container-fluid px-0 flex-wrap">
                        <div className="col-4 col-md-4 order-2 order-md-1">
                            <a className="navbar-brand text-maini oregano mx-0 d-flex justify-content-center justify-content-md-start p-0" id="logo" href="https://maini.hu"><h1>{t('mainPage:navbar.logo')}</h1></a>
                        </div>
                        <div className="col-4 d-md-none order-1 order-md-5">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div className="d-md-flex col-md-12 collapse navbar-collaps order-5 order-md-6" id="navbarNavAltMarkup">

                            <ul className="navbar-nav">
                                <li className="nav-item active"><a className="nav-link pb-md-3" >{t('mainPage:navbar.sale')}</a> </li>
                                <li className="nav-item"><a className="nav-link pb-md-3" >{t('mainPage:navbar.new')}</a></li>
                                <li className="nav-item dropdown has-megamenu">
                                    <a className="nav-link dropdown-toggle pb-md-3" href="#" data-bs-toggle="dropdown">Kategóriák</a>
                                    <div className="dropdown-menu megamenu m-0 border-0 border-radius-0 px-2 py-0 pb-md-2 pt-md-1 px-md-3 nav-shadow" role="menu">
                                        <div className="row flex-md-nowrap">
                                            <div className="col-12 col-md-4">
                                                <h5 className="ps-1 ps-md-0">Stílusos élet</h5>
                                                <ul className="navbar-nav flex-column ps-3 pb-2">
                                                    <li className="nav-item"><a className="nav-link" >Kedvenceitek</a></li>
                                                    <li className="nav-item"><a className="nav-link" >BASIC</a></li>
                                                    <li className="nav-item"><a className="nav-link" >tunikák</a></li>
                                                    <li className="nav-item"><a className="nav-link" >blézerek</a></li>
                                                    <li className="nav-item"><a className="nav-link" >Kabátok</a></li>
                                                    <li className="nav-item"><a className="nav-link" >Nadrágok</a></li>
                                                    <li className="nav-item"><a className="nav-link" >szettek</a></li>
                                                    <li className="nav-item"><a className="nav-link" >Szoknyák</a></li>
                                                    <li className="nav-item"><a className="nav-link" >Fehérnemű</a></li>

                                                </ul>
                                            </div>
                                            <div className="col-12 col-md-4">
                                                <h5 className="ps-1 ps-md-0">Stílusos élet</h5>
                                                <ul className="navbar-nav flex-column ps-3 pb-2">
                                                    <li className="nav-item"><a className="nav-link" >Kedvenceitek</a></li>
                                                    <li className="nav-item"><a className="nav-link" >BASIC</a></li>
                                                    <li className="nav-item"><a className="nav-link" >tunikák</a></li>
                                                    <li className="nav-item"><a className="nav-link" >blézerek</a></li>
                                                    <li className="nav-item"><a className="nav-link" >Kabátok</a></li>
                                                    <li className="nav-item"><a className="nav-link" >Nadrágok</a></li>
                                                    <li className="nav-item"><a className="nav-link" >szettek</a></li>
                                                    <li className="nav-item"><a className="nav-link" >Szoknyák</a></li>
                                                    <li className="nav-item"><a className="nav-link" >Fehérnemű</a></li>

                                                </ul>
                                            </div>
                                            <div className="col-12 col-md-4">
                                                <h5 className="ps-1 ps-md-0">Stílusos élet</h5>
                                                <ul className="navbar-nav flex-column ps-3 pb-2">
                                                    <li className="nav-item"><a className="nav-link" >Kedvenceitek</a></li>
                                                    <li className="nav-item"><a className="nav-link" >BASIC</a></li>
                                                    <li className="nav-item"><a className="nav-link" >tunikák</a></li>
                                                    <li className="nav-item"><a className="nav-link" >blézerek</a></li>
                                                    <li className="nav-item"><a className="nav-link" >Kabátok</a></li>
                                                    <li className="nav-item"><a className="nav-link" >Nadrágok</a></li>
                                                    <li className="nav-item"><a className="nav-link" >szettek</a></li>
                                                    <li className="nav-item"><a className="nav-link" >Szoknyák</a></li>
                                                    <li className="nav-item"><a className="nav-link" >Fehérnemű</a></li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item"><a className="nav-link pb-md-3" >Kedvenceitek</a></li>
                                <li className="nav-item"><a className="nav-link pb-md-3" >Ruhák</a></li>
                            </ul>

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
        </>
    )
}
export default NavBar
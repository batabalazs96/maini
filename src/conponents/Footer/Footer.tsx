import React from 'react'
import { useTranslation } from 'react-i18next';
import "./Footer.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
    const { t } = useTranslation(['mainPage']);
    return (
        <footer className="pt-5">
            <div className='container-fluid'>
                <div className="row text-white">
                    <div className="col-6 col-md-2 ms-auto text-center text-md-start">
                        <h5 className="fw-bold mb-3">INFORMÁCIÓK</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">ÁSZF</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Adatvédelmi nyilatkozat</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Cookie nyilatkozat</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Szállítási információk</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Fizetési információk</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">CIB fizetés és GYFK</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Visszaküldés, csere</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-2 text-center text-md-start">
                        <h5 className="fw-bold mb-3">KAPCSOLAT</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Kapcsolatfelvétel - Írj nekünk</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Rólunk</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Gyakori kérdések</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Regisztráció és bejelentkezés</a></li>
                        </ul>
                        <h5 className="fw-bold mt-3">BLOG</h5>
                    </div>

                    <div className="col-12 col-md-4 offset-md-1 me-auto mt-3 mt-md-0">
                        <form>
                            <h2 className="text-center">HÍRLEVÉL FELIRATKOZÁS</h2>
                            <p className='text-center text-md-start'>Ha első kézből szeretnél értesülni a legújabb termékekről, legfrissebb ajánlatokról és a nyereményjátékokról, iratkozz fel itt.</p>
                            <div className="d-flex w-100 gap-2 flex-column">
                                <input id="newsletter1" type="text" className="form-control p-2" placeholder="Neved" />
                                <input id="newsletter1" type="text" className="form-control p-2" placeholder="Email címed" />
                                <div className='d-flex align-items-baseline'>
                                    <input className="form-check-input me-3" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label fs-6">
                                        Hozzájárulok az adatkezeléshez
                                    </label>
                                </div>
                                <button className="btn btn-maini-pink text-white mt-3" type="button">Feliratkozom</button>
                            </div>
                        </form>
                    </div>
                    <div className="row">
                        <div className=" py-4 mt-5 border-top col-12 col-md-9  mx-2 mx-md-auto">
                            <div className='row'>
                                <div className="col-md-4 col-6 "><a className="navbar-brand text-white oregano mx-0 d-flex justify-content-start" id="logo" href="https://maini.hu">{t('mainPage:navbar.logo')}</a></div>
                                <div className="responsive-image col-12 col-md-4 order-1 py-3 py-md-0" >
                                            <img className="img-fluid" src="CIB_es_kartyalogok.png" />
                                </div>
                                <div className="col-md-4 col-6 align-items-center d-flex justify-content-end order-md-2">
                                    <ul className="list-unstyled d-flex m-0">
                                        <li className="ms-3"><a className="link-dark" href="#"><FontAwesomeIcon icon={faFacebook} inverse size="3x" /></a></li>
                                        <li className="ms-3"><a className="link-dark" href="#"><FontAwesomeIcon icon={faInstagram} inverse size="3x" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

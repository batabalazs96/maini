import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { InsideBorderedImg } from '../../conponents/InsideBorderedImg/InsideBorderedImg';
import SwiperCarousel from '../../conponents/SwiperCarousel/SwiperCarousel';

import { faAngleLeft, faAngleRight, faCreditCard, faShippingFast, faSmileBeam, faSyncAlt } from '@fortawesome/free-solid-svg-icons'
import "./HomePage.scss";
import { SwiperSlide } from 'swiper/react';
import { Footer } from '../../conponents/Footer/Footer';
import enviroment from '../../config/enviroment';
import { InstaFeed } from '../../conponents/InstaFeed/InstaFeed';

const HomePage = () => {   

    return (
    <div>
        <div className="big-homepage-img mb-5">
            <button className="btn btn-secondary">TOVÁBB</button>
        </div>
        {/* Infó */}
        <div className='mx-0 mx-md-5 px-3 px-md-0 d-flex align-items-center'>
            <div className="swiper-button-prev-unique pe-2"><FontAwesomeIcon icon={faAngleLeft} /></div>
            <SwiperCarousel nextElClass={".swiper-button-next-unique"} prevElClass={".swiper-button-prev-unique"} >
                <SwiperSlide>
                    <div className='d-flex flex-column align-items-center feature-div'>
                        <FontAwesomeIcon className='feature-icon' icon={faSmileBeam} />
                        <h5>VÁSÁRLÓI TÁMOGATÁS</h5>
                        <p>
                            Írj Facebook-on vagy dobj egy e-mailt, ha kérdésed van, és RÖGTÖN válaszolunk! Természetesen a telefont is felvesszük.
                            Délelőtt 9:00 és délután 17:00 óra között állunk rendelkezésedre.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='d-flex flex-column align-items-center feature-div'>
                        <FontAwesomeIcon className='feature-icon' icon={faShippingFast} />
                        <h5>GYORS KISZÁLLÍTÁS</h5>
                        <p>
                            Add le rendelésed délelőtt 12:00-ig és mi még aznap átadjuk a futárszolgálatnak.
                            Másnap már nálad is van a csomagod. Kérdés esetén keress minket bátran a rendeléseddel kapcsolatban.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='d-flex flex-column align-items-center feature-div'>
                        <FontAwesomeIcon className='feature-icon' icon={faSyncAlt} />
                        <h5>MINŐSÉGI GARANCIA</h5>
                        <p>
                            A legjobb minőségű termékek, amelyek átvételkor mosolyt csalnak az arcodra.
                            30 napos visszavételi garanciát nyújtunk.
                            Kérdés nélkül visszaadjuk a vásárolt termék árát.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='d-flex flex-column align-items-center feature-div'>
                        <FontAwesomeIcon className='feature-icon' icon={faCreditCard} />
                        <h5>MEGBÍZHATÓ, MAGYAR BOLT</h5>
                        <p>
                            Minden termékünk raktáron van, így nem kell rá heteket várnod!
                            Garantáljuk, hogy a termékedet egy héten belül a kezedben tarthatod. Ellenkező esetben ingyen a tiéd!*
                        </p>
                    </div>
                </SwiperSlide>
            </SwiperCarousel>
            <div className="swiper-button-next-unique ps-2"><FontAwesomeIcon icon={faAngleRight} /></div>
        </div>
        {/* Újdonságok */}
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-12"><h2 className='text-center'>Újdonságok</h2></div>
            </div>
            <div className='row'>
                <SwiperCarousel sw={1.5} delay={2000} >
                    <SwiperSlide>
                        <InsideBorderedImg src="https://maini.hu/wp-content/uploads/2022/01/Senna-p%C3%BAder-sliccelt-gomb-d%C3%ADszes-szoknya-3.jpg" category="Csini ruci" buttonColor="black" buttonText="Bővebben" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <InsideBorderedImg src="https://maini.hu/wp-content/uploads/2021/12/Hanna-piros-sz%C3%ADn%C5%B1-alkalmi-ruha-5-1500x2000.jpg" category="Csini ruci" buttonColor="black" buttonText="Bővebben" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <InsideBorderedImg src="https://maini.hu/wp-content/uploads/2021/12/Hanna-kir%C3%A1ly-k%C3%A9k-sz%C3%ADn%C5%B1-alkalmi-ruha-2-1500x2000.jpg" category="Csini ruci" buttonColor="black" buttonText="Bővebben" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <InsideBorderedImg src="https://maini.hu/wp-content/uploads/2021/12/Hanna-pezsg%C5%91-sz%C3%ADn%C5%B1-alkalmi-ruha-6-1500x2000.jpg" category="Csini ruci" buttonColor="black" buttonText="Bővebben" />
                    </SwiperSlide>
                </SwiperCarousel>
            </div>
            <div className="row mt-3">
                <div className="col-12 d-flex justify-content-center">
                    <a href="" className='btn news-btn'>TOVÁBB</a>
                </div>
            </div>
            {/* Kollázs */}
            <div className="row mt-5">
                <div className="col-md-6">
                    <InsideBorderedImg src="/kep1.jpg" category="Csini ruci" buttonColor="black" buttonText="Bővebben" />

                </div>
                <div className="col-md-3 d-flex flex-column justify-content-between">
                    <InsideBorderedImg src="/kep2.jpg" category="Csini ruci" buttonColor="black" buttonText="Bővebben" />
                    <InsideBorderedImg src="/kep3.jpg" category="Csini ruci" buttonColor="black" buttonText="Bővebben" />

                </div>
                <div className="col-md-3">
                    <InsideBorderedImg src="/keph.jpg" category="Csini ruci" buttonColor="black" buttonText="Bővebben" />
                </div>
            </div>

            {/* Postok */}
            <div className="row mt-5">
                <div className="col-12"><h2 className='text-center'>Blogok</h2></div>
            </div>
            <div className="row mt-2">
                <SwiperCarousel delay={2000} lgSPV={6} mdSPV={6}>
                    <SwiperSlide>
                        <a href="">
                            <div className="post-thumbnail">
                                <div className="responsive-image">
                                    <img src="/Blog/7 dolog a C-vitaminról, amit érdemes tudnod.jpg" className="responsive-image__image" />
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="">
                            <div className="post-thumbnail">
                                <div className="responsive-image">
                                    <img src="/Blog/2022 tavasz pantone szín.jpg" className="responsive-image__image" />
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="">
                            <div className="post-thumbnail">
                                <div className="responsive-image">
                                    <img src="/Blog/A színek hatása a hangulatodra.jpg" className="responsive-image__image" />
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="">
                            <div className="post-thumbnail">
                                <div className="responsive-image">
                                    <img src="/Blog/Hogyan keljek fel könnyen.jpg" className="responsive-image__image" />
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="">
                            <div className="post-thumbnail">
                                <div className="responsive-image">
                                    <img src="/Blog/Küzdj meg a tavaszi fáradtsággal.jpg" className="responsive-image__image" />
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="">
                            <div className="post-thumbnail">
                                <div className="responsive-image">
                                    <img src="/Blog/Mit Vegyek Fel Esküvőre Vendégként.jpg" className="responsive-image__image" />
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                </SwiperCarousel>
            </div>
            <InstaFeed />
        </div>
    </div>);
};

export default HomePage;

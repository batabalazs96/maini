import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import SwiperCarousel from '../SwiperCarousel/SwiperCarousel';

import { faAngleLeft, faAngleRight, faCreditCard, faShippingFast, faSmileBeam, faSyncAlt } from '@fortawesome/free-solid-svg-icons'
import "../HomePage/HomePage.module.scss";
import { SwiperSlide } from 'swiper/react';
import { InstaFeed } from '../InstaFeed/InstaFeed';
import { ProductEntry } from '../ProductEntry/ProductEntry';
import Image from 'next/image';
import styles from './HomePage.module.scss'

const HomePage = () => {
    const [SampleProducts, setSampleProducts] = useState([
        {
            src: "https://maini.hu/wp-content/uploads/2022/01/Senna-p%C3%BAder-sliccelt-gomb-d%C3%ADszes-szoknya-3.jpg",
            name: "Szoknya",
            price: 3000,
            discountPrice: 2000,
            badge: "AKCIÓ, BEST SELLER"
        },
        {
            src: "https://maini.hu/wp-content/uploads/2021/12/Hanna-piros-sz%C3%ADn%C5%B1-alkalmi-ruha-5-1500x2000.jpg",
            name: "Alkalmi ruha",
            price: 4000,
            badge: ""
        },
        {
            src: "https://maini.hu/wp-content/uploads/2021/12/Hanna-kir%C3%A1ly-k%C3%A9k-sz%C3%ADn%C5%B1-alkalmi-ruha-2-1500x2000.jpg",
            name: "Kék alkalmi ruha",
            price: 4500,
            badge: ""
        },
        {
            src: "https://maini.hu/wp-content/uploads/2021/12/Hanna-pezsg%C5%91-sz%C3%ADn%C5%B1-alkalmi-ruha-6-1500x2000.jpg",
            name: "Pezsgő alkalmi ruha",
            price: 5000,
            badge: "AKCIÓ",
            discountPrice: 3500,
        },
    ]);

    return (
        <div>
            <div className="big-homepage-img mb-5">
                <div className="d-flex flex-column big-img-content">
                    <div className="text-white"><p>Ami a rétegezéshez nélkülözhetetlen</p></div>
                    <div className="text-white ">
                        <h3>Könnyű réteges szettek</h3>
                    </div>
                    <div className="sztorihoz-btn">
                        <a className="" href="">A
                            sztorihoz</a>
                    </div>
                </div>
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
                    {SampleProducts.map((product: any) => {
                        return (
                            <div className='col-12 col-md-3 my-2'>
                                <ProductEntry imgSrc={product['src']} name={product['name']} price={product['price']} badges={product['badge']} discountPrice={product['discountPrice']} />
                            </div>
                        )
                    })}
                </div>
                <div className="row">
                    <div className="col-12"><h2 className='text-center'>Újdonságok</h2></div>
                </div>
                {/* <div className='row'>
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
                </div> */}
                <div className="row mt-3">
                    <div className="col-12 d-flex justify-content-center">
                        <a href="" className='btn news-btn'>TOVÁBB</a>
                    </div>
                </div>
                {/* Kollázs */}
                <div className="row mt-5">
                    <div className="col-md-6">
                        <div className={`position-relative ${styles.inside_bordered_img}`}>
                            <Image src="/kep1.jpg" width={300} height={300} layout="responsive" quality={90} />
                            <div className={styles.text} >
                                <span>Teszt</span>
                                <button className={styles.white + " px-5"}>Teszt Gomb</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex flex-column justify-content-between">
                        <div className={`position-relative ${styles.inside_bordered_img}`}>
                            <Image src="/kep2.jpg" width={300} height={300} layout="responsive" quality={90} />
                            <div className={styles.text} >
                                <span>Teszt</span>
                                <button className={styles.white + " px-5"}>Teszt Gomb</button>
                            </div>
                        </div>
                        <div className={`position-relative ${styles.inside_bordered_img}`}>
                            <Image src="/kep3.jpg" width={300} height={300} layout="responsive" quality={90} />
                            <div className={styles.text} >
                                <span>Teszt</span>
                                <button className={styles.white + " px-5"}>Teszt Gomb</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className={`position-relative ${styles.inside_bordered_img}`}>
                            <Image src="/keph.jpg" width={185} height={380} layout="responsive" quality={75} />
                            <div className={styles.text} >
                                <span>Teszt</span>
                                <button className={styles.black + " px-5"}>Teszt Gomb</button>
                            </div>
                        </div>
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
                                        <img src={process.env.PUBLIC_URL + "/Blog/7 dolog a C-vitaminról, amit érdemes tudnod.jpg"} className="responsive-image__image" />
                                    </div>
                                </div>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="">
                                <div className="post-thumbnail">
                                    <div className="responsive-image">
                                        <img src={process.env.PUBLIC_URL + "/Blog/2022 tavasz pantone szín.jpg"} className="responsive-image__image" />
                                    </div>
                                </div>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="">
                                <div className="post-thumbnail">
                                    <div className="responsive-image">
                                        <img src={process.env.PUBLIC_URL + "/Blog/A színek hatása a hangulatodra.jpg"} className="responsive-image__image" />
                                    </div>
                                </div>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="">
                                <div className="post-thumbnail">
                                    <div className="responsive-image">
                                        <img src={process.env.PUBLIC_URL + "/Blog/Hogyan keljek fel könnyen.jpg"} className="responsive-image__image" />
                                    </div>
                                </div>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="">
                                <div className="post-thumbnail">
                                    <div className="responsive-image">
                                        <img src={process.env.PUBLIC_URL + "/Blog/Küzdj meg a tavaszi fáradtsággal.jpg"} className="responsive-image__image" />
                                    </div>
                                </div>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="">
                                <div className="post-thumbnail">
                                    <div className="responsive-image">
                                        <img src={process.env.PUBLIC_URL + "/Blog/Mit Vegyek Fel Esküvőre Vendégként.jpg"} className="responsive-image__image" />
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

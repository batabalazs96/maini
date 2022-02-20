import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../languages/config'

const Carousel = () => {
    
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active d-flex">
                    <div className="row">
                        <div className="col-md-4"> <img src="https://maini.hu/wp-content/uploads/2021/12/Hanna-kir%C3%A1ly-k%C3%A9k-sz%C3%ADn%C5%B1-alkalmi-ruha-2-1500x2000.jpg"/></div>
                        <div className="col-md-4"> <img src="https://maini.hu/wp-content/uploads/2021/12/Hanna-kir%C3%A1ly-k%C3%A9k-sz%C3%ADn%C5%B1-alkalmi-ruha-2-1500x2000.jpg"/></div>
                        <div className="col-md-4"> <img src="https://maini.hu/wp-content/uploads/2021/12/Hanna-kir%C3%A1ly-k%C3%A9k-sz%C3%ADn%C5%B1-alkalmi-ruha-2-1500x2000.jpg"/></div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
};

export default Carousel;

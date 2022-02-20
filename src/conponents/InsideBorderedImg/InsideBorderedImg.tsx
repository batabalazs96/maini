import React from 'react';
import "./InsideBorderedImg.scss"

export const InsideBorderedImg = ({ src, buttonColor, category, buttonText }: any) => {
    return (
        <div className="carousel">
        <div
            className="responsive-image pt-3 pt-md-0">
            <img
                src={src}
                className="responsive-image__image" />
            <div className="text" >
                <span>{category}</span>
                
                <button className={buttonColor + " px-5"}>{buttonText}</button>
            </div>
        </div>
        </div>
    );
};

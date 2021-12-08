import React from "react"
import Fade from 'react-reveal/Fade';
import ImageHero from 'assets/images/imghero.jpg';
import ImageHeroFrame from 'assets/images/imgheroframe.jpg';
import IconCities from 'assets/images/icons/ic_cities.svg';
import IconTraveler from 'assets/images/icons/ic_traveler.svg';
import IconTreasure from 'assets/images/icons/ic_treasure.svg';

import Button from 'elements/Button';
import formatNumber from 'utils/formatNumber'; 

export default function Hero(props) {
    function showMostPicked() {
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 30,
            behavior: "smooth",
        })
    }


    return (
    <Fade bottom>  
        <section className="container pt-4">
            <div className="row align-items-center">
                <div className="col-auto pr-5" style={{ width: 530}}>
                    <h1 className="font-weight-bold line-height-1 mb-3">
                    Sederhanakan Bahagiamu<br/> 
                    Untuk Ngopi Di WD Coffee 
                    </h1>
                    <p className="mb-4 font-weight-light text-gray-500 w-75" style={{ lineHeight : "160%"}}>
                    Filosofi bentuk dan elemen dikonsep sebagaimana
                    kehidupan yang harus seimbang. Kotak memiliki filosofi netral,seimbang, natural dan memiliki sifat
                    yang memberikan energi positif untuk kehidupan sehari-hari yang tidak seimbang. 
                    Maka dengan begitu seimbangkanlah dengan hal yang membuat harimu lebih ter isi walaupun hanya setetes kebahagian
                    </p>
                    <Button
                    className="btn px-5"
                    isPrimary
                    hasShadow
                    onClick={showMostPicked}
                    >
                        Show Me Now
                        </Button>
                    
                </div>
                <div className="col-6 pl-5">
                    <div style={{ width: 520, height: 410}}>
                        <img src={ImageHero}
                        alt="Room with couches"
                        className="img-fluid position-absolute"
                        style = {{ margin: "-30px 0 0 -30px", zIndex: 1}} />
                        <img src={ImageHeroFrame}
                        alt="Room with couches frame"
                        className="img-fluid position-absolute"
                        style={{ margin: "0 -15px -15px 0"}} />
                    </div>
                </div>
            </div>
        </section>
    </Fade>  
    )
}

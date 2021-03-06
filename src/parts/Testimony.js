import React from 'react';
import TestimonyAccent from 'assets/images/testimonial-landingpage-frame.jpg';
import Star from 'elements/Star';
import Button from 'elements/Button';
import Fade from 'react-reveal/Fade';

export default function Testimony({data}) {
    return (
        <Fade bottom>
        <section className="container">
            <div className="row align-items-center">
                <div className="col-auto" style={{marginRight: 70}}>
                    <div className="testimonial-hero" style={{ margin : `30px 0 0 30px`}}>
                        <img className="position-absolute" 
                        src={data.imageUrl} 
                        alt="Testimonial" 
                        style={{zIndex:1}}/>
                        <img className="position-absolute" 
                        src={TestimonyAccent} 
                        alt="Testimonial" 
                        style={{ margin : `-30px 0 0 -30px`}}/>
                    </div>
                </div>
                <div className="col">
                    <h4 style={{marginBottom : 40}}>
                        {data.name}
                    </h4>
                    <Star value={data.rate} height={35} width={35} spacing={5}></Star>
                    <h5 className="h2 font-weight-light line-light-2 my-3">
                        {data.content}
                    </h5>
                    <span className="text-gray-500">
                        {data.familyName}, {data.familyOccupation}
                    </span>

                    <div>
                        <Button className="btn px-5"
                        style={{ marginTop: 40}}
                        hasShadow
                        isPrimary
                        type="Link"
                        href={`/tesimonial/${data._id}`}>
                            Read Their Story
                        </Button>
                    </div>
                </div>
            </div>
        </section>
        </Fade>
    )
}
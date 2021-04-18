import React from 'react'
import propTypes from 'prop-types'
import "./index.scss";

export default function Star({ className, value, height, width, spacing}) {
    
    // jika nilai nya 3.5 maka menjadi 0.5 karena sisa hasil di bagi 1
    const decimals = Number(value) % 1
   
    const star = []
    let leftPos = 0
    for (let index = 0; index < 5 && index < value - decimals; index++ ) {
        leftPos = leftPos + width
        star.push(
            <div className="star"
            key={`star-${index}`} 
            style={{ left: index * width, 
            width: width,
            height: height, 
            marginRight: spacing}} >
            </div>
        )
        
    }
    if(decimals > 0 && value <= 5)
    star.push(
    <div className="star"
        key={`starWithDecimal`} 
        style={{ left: leftPos, 
        width: decimals * width - spacing,
        height: height, }}>
            </div>
    )


        const starPlaceholder = []
        for (let index = 0; index < 5 ; index++ ) {
            star.push(
                <div className="star placeholder"
                key={`starPlaceholder-${index}`} 
                style={{ left: index * width, 
                width: width,
                height: height, 
                marginRight: spacing}} >
                </div>
            )
            
        }        

    return (
        <div>
            <div className={['stars', className].join(" ")} style={{ height: height}} >
                {starPlaceholder}
                {star}
            </div>
        </div>
    )
}

Star.propTypes = {
    className : propTypes.string,
    value : propTypes.number,
    height : propTypes.number,
    width : propTypes.number,
    spacing : propTypes.number,
}

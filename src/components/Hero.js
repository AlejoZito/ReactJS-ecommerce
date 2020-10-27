import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'
import Card from '@material-ui/core/Card'

export default function Hero(props)
{
    const carouselItemStyle = (img) => {
        return {
            backgroundImage: `url(${img})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height:300,
        }
    }
    const items = [
        {
            image: "img/hero1.jpg"
        },
        {
            image: "img/hero2.jpg"
        },
        {
            image: "img/hero3.jpg"
        }
    ]
 
    return <Carousel interval={4000}>
        {
            items.map((item, i) => <div style={carouselItemStyle(item.image)}>
            {/* <img src={item.image}/> */}
            <p></p>
            </div>)
        }            
    </Carousel>
}
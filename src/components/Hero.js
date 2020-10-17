import React from 'react'
import Container from '@material-ui/core/Container';
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'
import Button from '@material-ui/core/Button'

const carouselItems = [
    {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!",
        img: 'img/watch_01.png'
    },
    {
        name: "Random Name #2",
        description: "Hello World!",
        img: 'img/watch_01.png'
    }
]

function Hero(){
    return <Container>
        <Carousel>
            {
                carouselItems.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>
    </Container>
}

function CarouselItem(props)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <img src={props.item.img} alt={props.item.name}/>
            <p>{props.item.description}</p>
 
            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

export default Hero
import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 800,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 22,
        fontWeight: 600,
    },
    pos: {
        marginBottom: 12,
    },
    media: {
        position: 'relative',
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    mediaOverlay: {
        position: 'absolute',
        top:0,
        width:'100%',
        height:'100%',
        background: 'linear-gradient(to top, rgba(224,64,251,1) 11%, rgba(0,212,255,0) 34%)',
    }
});


export default function ItemDetail({ data }) {

    const [detailData, setDetailData] = useState({});

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    useEffect(() => {
        console.log("Seteo item detail data");
        console.log(data);
        setDetailData(data);
        console.log(detailData.img)
    }, [data]);

    return (
        <Card className={classes.root}>
            
            <CardMedia
                className={classes.media}
                image={detailData.img}
                title={detailData.title}
                children={<div className={classes.mediaOverlay} />}
            />
            
            <CardContent>
                <Typography className={classes.title} color="textPrimary">
                    {detailData.title}
                </Typography>
                 <Typography variant="h5" component="h2">
                    $ {detailData.price}
                </Typography>
                <Typography variant="body2" component="p">
                    {detailData.description}
                </Typography> 
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}
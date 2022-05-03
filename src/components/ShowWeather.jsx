import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: '1%',
    },
}));

const ShowWeather = (data) => {
    const dataWeather = data.data;
    console.log(dataWeather.data ? dataWeather.data.weather[0].main : "no")
    console.log(dataWeather.data);

    const classes = useStyles();
    let imgurl = '';

    dataWeather.data ? 
        imgurl = `../img/${dataWeather.data.weather[0].main}.jpg`
    : imgurl = '/img/clima.jpg'


    return (

        <div>
            <Grid
                className={classes.root}
                container
                direction="column"
                alignItems="center"
                justifyContent="center"
            >
                <Grid item >
                    <Card>
                        <CardMedia
                            component="img"
                            src={imgurl}
                            title="Image with weather"
                        />
                        <CardContent>
                            contenido
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>

    );
}

export default ShowWeather;
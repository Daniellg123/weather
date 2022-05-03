import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: '1%',
    },
    card: {
        display: 'block',
        height: '50%',
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
    },
}));

const cardStyle = {
    display: "block",
    transitionDuration: "0.3s",
    height: "30vw"
};

const ShowWeather = (data) => {
    const dataWeather = data.data;
    console.log(dataWeather.data ? dataWeather.data.weather[0].main : "no")
    console.log(dataWeather.data);

    const classes = useStyles();
    let imgurl = '';
    let iconurl = '';

    if (dataWeather.data) {
        iconurl = `http://openweathermap.org/img/wn/${dataWeather.data.weather[0].icon}.png`;
        imgurl = `../img/${dataWeather.data.weather[0].main}.jpg`;
    } else {
        imgurl = '/img/clima.jpg'
    }

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
                        <div style={cardStyle}>
                            <CardMedia
                                component="img"
                                src={imgurl}
                                title="Image with weather"
                            />
                        </div>
                        <CardContent>
                            {
                                dataWeather.data ? (
                                    <div>
                                        <Paper className={classes.paper}>
                                        <img src={iconurl} alt="" srcset="" />
                                        </Paper>
                                        <Grid container item xs={12} spacing={3}>
                                            <Grid item xs={4}>
                                                <Paper className={classes.paper}>
                                                    Temperatura: {Math.floor(dataWeather.data.main.temp - 273.15)}°
                                                </Paper>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Paper className={classes.paper}>
                                                    Descripción: {dataWeather.data.weather[0].description}
                                                </Paper>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Paper className={classes.paper}>
                                                    Maxima: {Math.floor(dataWeather.data.main.temp_max - 273.15)}°
                                                    {'\n'}
                                                    Minima: {Math.floor(dataWeather.data.main.temp_min - 273.15)}°
                                                </Paper>
                                            </Grid>
                                        </Grid>
                                    </div>
                                ) : ''
                            }
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>

    );
}

export default ShowWeather;
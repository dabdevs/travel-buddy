import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import { getPlaces } from "./api";

// Components
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

const App = () => {
    const [places, setPlaces] = useState([]);
    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState({});

    // Get device's current location
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCoordinates({ lat: latitude, lng: longitude });
        })
    }, [])

    useEffect(() => {
        getPlaces(bounds.ne, bounds.sw).then((data) => {
            setPlaces(data)
        });
        console.log(coordinates)
    }, [coordinates, bounds])

    // const testPlaces = [
    //     {
    //         name: 'First place',
    //         price_level: '$$',
    //         rating: 4.5,
    //         awards: ['Tripadvisor Award 2012', 'Booking Award 2022']
    //     },
    //     {
    //         name: 'Second place',
    //         price_level: '$$$$',
    //         rating: 4.7,
    //         awards: ['Booking Award 2010']
    //     },
    //     {
    //         name: 'Third place',
    //         price_level: '$',
    //         rating: 4.0,
    //         awards: ['Tripadvisor Award 2015', 'Hostelswordls Award 2002']
    //     },
    // ]

    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{ width: '100%' }}>
                <Grid item xs={12} md={4}>
                    <List places={places} />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map
                        coordinates={coordinates}
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default App;
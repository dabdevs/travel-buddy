import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import { getPlaces } from "./api";

// Components
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

const App = () => {
    const [places, setPlaces] = useState([]);
    const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
    const [bounds, setBounds] = useState(null);

    // Get device's current location
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCoordinates({ lat: latitude, lng: longitude });
        })
    }, [])

    useEffect(() => {
        // getPlaces(bounds.ne, bounds.sw).then((data) => {
        //     setPlaces(data)
        // });
        console.log(coordinates)
    }, [coordinates, bounds])

    const testPlaces = [
        {
            name: 'First place',
            price_level: '$$',
            rating: 4.5
        },
        {
            name: 'Second place',
            price_level: '$$$$',
            rating: 4.7
        },
        {
            name: 'Third place',
            price_level: '$',
            rating: 4.0
        },
    ]

    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{ width: '100%' }}>
                <Grid item xs={12} md={4}>
                    <List places={testPlaces} />
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
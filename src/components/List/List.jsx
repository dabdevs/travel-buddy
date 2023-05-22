import React, { useState } from "react";
import { CircularProgress, Grid, Typography, FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import PlaceDetails from '../PlaceDetails/PlaceDetails';

import useStyles from './styles';

const List = () => {
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState(0);
    const classes = useStyles();

    const places = [
        {
            name: 'First place'
        },
        {
            name: 'Second place'
        },
        {
            name: 'Third place'
        },
    ]

    return (
        <div className={classes.container}>
            <Typography variant="h4">
                Restaurants, Hotels & Attractions around you
            </Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="restaurants">Restaurants</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attractions">Attractions</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3.0</MenuItem>
                    <MenuItem value={4}>Above 4.0</MenuItem>
                    <MenuItem value={4.5}>Above 4.5</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
                {places?.map((place, index) => (
                    <Grid item key={index} xs={12}>
                        <PlaceDetails place={place} />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default List;
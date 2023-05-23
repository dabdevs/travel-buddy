import React from "react";
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Rating from "@material-ui/lab";

import useStyles from './styles';

const PlaceDetails = ({ place }) => {
    const classes = useStyles();

    return (
        <Card elevation={6}>
            <CardMedia
                style={{ height: 350 }}
                image={place.photo ? place.photo.images.large.url : 'https://placehold.co/400'}
                title={place.name}
            />
            <div className={classes.cardFooter}>
                <Typography gutterBottom variant='h5'>{place.name}</Typography>

                {place.price_level &&
                    (<Box className={classes.box}>
                        <Typography variant='subtitle1'>Price</Typography>
                        <Typography gutterBottom variant='subtitle1'> {place.price_level}</Typography>
                    </Box>)
                }

                {place.rating &&
                    (<Box className={classes.box}>
                        <Typography variant='subtitle1'>Rating</Typography>
                        <Typography gutterBottom variant='subtitle1'> {place.rating}</Typography>
                    </Box>)
                }

                {place?.awards?.map((award) => (
                    <Box my={1} className={classes.box}>
                        <img src={award.img.small} alt={award.display_name} />
                        <Typography variant='subtitle2' color='textSecondary'>{place.display_name}</Typography>
                    </Box>
                ))}

                {place?.cuisine?.map(({name}) => 
                   (<Chip size='small' className={classes.chip} label={name} key={name} />)
                )}

                {place?.address && 
                    (<Box my={1} className={classes.box}>
                        <Typography gutterBottom variant='body'> <LocationOnIcon /> {place.address}</Typography>
                    </Box>)
                }

            </div>
        </Card>
    )
}

export default PlaceDetails;
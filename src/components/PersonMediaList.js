import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {mediaActions} from "../redux/slices/media.slice";
import {Card, CardActionArea, CardContent, CardMedia, Grid} from "@mui/material";
import {Link} from "react-router-dom";
import {originalImage, w500Image} from "../api/apiConfig";
import CircularRate from "./CircularRating";

const PersonMediaList = ({personName}) => {
    const dispatch = useDispatch();

    const {personSearch, error} = useSelector(state => state.mediaReducer);
    console.log(personSearch);
    useEffect(() => {
        dispatch(mediaActions.getPersonMedias(personName))
    }, [dispatch, personName])

    return (
        <Grid container columnSpacing={2}>
            {personSearch.map((person) => (
                person.known_for.map((media) => (
                    <Grid item  key={media.id} xs={4}>
                        <Card sx={{
                            marginBottom: "20px",
                            position: "relative",
                            cursor: "pointer",
                            backgroundColor: "inherit"
                        }}>
                            <Link to={`/movie/${media.id}`}
                                  style={{color: "white", textDecoration: "none"}}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image={w500Image(media.poster_path)}
                                        alt={media.original_title || media.name}
                                        sx={{
                                            transition: "all ease 0.5s",
                                            "&:hover": {
                                                opacity: 0.25
                                            },
                                        }}
                                    />
                                    <CardContent
                                        sx={{position: "absolute", zIndex: "-999", bottom: "0", color: "white"}}>
                                        <CircularRate value={media.vote_average}/>
                                        <h4 style={{fontWeight: "700"}}>
                                            {media.title || media.name}
                                        </h4>
                                        <b><p>{(media.release_date || media.first_air_date).substring(0, 4)}</p></b>
                                    </CardContent>
                                </CardActionArea>
                            </Link>
                        </Card>
                    </Grid>
                ))
            ))
            }
        </Grid>
    )
};

export {
    PersonMediaList
};
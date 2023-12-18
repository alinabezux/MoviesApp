import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Box, Card, CardActionArea, CardContent, CardMedia} from "@mui/material";
import CircularRate from "../CircularRating";
import {mediaType, originalImage} from "../../api";
import {mediaActions} from "../../redux/slices/media.slice";
import {MediaDetailsPage} from "../../pages";
import {Link} from "react-router-dom";

const MediaCard = ({media, mediaType}) => {
    // const dispatch = useDispatch();
    // const {genres} = useSelector(state => state.mediaReducer);
    //
    // useEffect(() => {
    //     dispatch(mediaActions.getGenres(mediaType.tv || mediaType.movie));
    // }, [dispatch]);
    //
    // const findGenresById = (id) => {
    //     const genre = genres?.find(value => value.id === id);
    //     return genre?.name;
    // }

    return (
        <Card sx={{
            width: "20%",
            height: "auto",
            margin: "10px",
            position: "relative",
            cursor: "pointer",
            backgroundColor: "inherit",
        }}>

            <Link to={`/${mediaType}/${media.id}`} style={{color: "grey"}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image={originalImage(media.poster_path)}
                        alt={media.original_title || media.name}
                        sx={{
                            transition: "all ease 0.5s",
                            "&:hover": {
                                opacity: 0.25
                            },
                        }}
                    />
                    <CardContent sx={{position: "absolute", zIndex: "-999", bottom: "0", color: "white"}}>
                        <CircularRate value={media.vote_average}/>
                        <h4 style={{fontWeight: "700"}}>
                            {media.title || media.name}
                        </h4>
                        {/*<Box sx={{display: "flex", flexDirection: "row"}}>*/}
                        {/*    {(media.genre_ids).slice(0, 2)*/}
                        {/*        .map(id => <p key={id} style={{marginRight: "5px"}}><i>{findGenresById(id)}</i></p>)}*/}
                        {/*</Box>*/}
                        <b><p>{(media.release_date || media.first_air_date).substring(0, 4)}</p></b>
                    </CardContent>
                </CardActionArea>
            </Link>
        </Card>
    );
}

export {MediaCard}
import {useDispatch, useSelector} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect} from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import {mediaActions} from "../redux/slices/media.slice";
import {originalImage} from "../api";
import {Carousel} from "react-bootstrap";
import Button from '@mui/material/Button';
import {Link, useLocation} from "react-router-dom";
import CircularRate from "./CircularRating";


const MainBanner = ({mediaType, mediaCategory}) => {

    const dispatch = useDispatch();
    const location = useLocation();

    const {listWithCategory} = useSelector((state) => state.mediaReducer);

    useEffect(() => {
        dispatch(mediaActions.getMediaByCategory({mediaType, mediaCategory}))
    }, [dispatch]);


    const isHomePage = location.pathname.includes('/home');

    return (
        <Carousel fade indicators={false}>
            {
                listWithCategory.map((media) =>
                    <Carousel.Item className="item" key={media.id}>
                        <img
                            src={originalImage(media.backdrop_path)}
                            alt={(media.original_title) || (media.name)}
                        />
                        <Carousel.Caption>
                            {
                                !isHomePage ?
                                    <CircularRate value={media.vote_average}/>
                                    : null
                            }
                            <h1>{(media.original_title) || (media.name)}</h1>
                            <p>{media.overview}</p>
                            {
                                isHomePage ?
                                    <p style={{color: "red"}}><b>Release date: </b>{media.release_date} </p>
                                    : null
                            }
                            {
                                !isHomePage ?
                                    <Link to={`/${mediaType}/${media.id}`}>
                                        <Button startIcon={<PlayArrowIcon/>} variant="contained"
                                                style={{backgroundColor: "red"}}>watch
                                            now</Button>
                                    </Link>
                                    : null
                            }
                        </Carousel.Caption>
                    </Carousel.Item>)
            }
        </Carousel>

    );
}

export {MainBanner}
import {
    Avatar,
    Card,
    CardActionArea,
    CardContent,
    CardHeader,
    CardMedia,
    Container,
    Grid,
    Typography
} from "@mui/material";
import {red} from '@mui/material/colors';
import {useDispatch, useSelector} from "react-redux";
import {mediaActions} from "../../redux/slices/media.slice";
import {useEffect} from "react";
import {Box, Stack} from "@mui/system";
import {originalImage, w500Image, youtubePath} from "../../api";
import imdb from '../../assets/IMDB_Logo_2016.svg.png';
import empty from '../../assets/stub-empty.svg';
import {Link, useLocation} from "react-router-dom";
import CircularRate from "../CircularRating";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import Button from "@mui/material/Button";
import {format, parseISO} from 'date-fns';
import {MediaCard} from "./MediaCard";


const MediaDetails = ({mediaType, mediaId}) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const {media, videos, credits, reviews, similar, error} = useSelector(state => state.mediaReducer);

    useEffect(() => {
        dispatch(mediaActions.getOneMedia({mediaType: mediaType, mediaId: mediaId}))
    }, [dispatch, mediaType, mediaId])

    useEffect(() => {
        dispatch(mediaActions.getMediaVideos({mediaType: mediaType, mediaId: mediaId}))
    }, [dispatch, mediaType, mediaId]);

    useEffect(() => {
        dispatch(mediaActions.getMediaCredits({mediaType: mediaType, mediaId: mediaId}))
    }, [dispatch, mediaType, mediaId]);

    useEffect(() => {
        dispatch(mediaActions.getMediaReviews({mediaType: mediaType, mediaId: mediaId}))
    }, [dispatch, mediaType, mediaId]);

    useEffect(() => {
        dispatch(mediaActions.getSimilarMedia({mediaType: mediaType, mediaId: mediaId}));
    }, [dispatch, mediaType, mediaId]);


    const TV = location.pathname.includes('/tv');

    return (
        <Box>
            <img
                src={originalImage(media.backdrop_path)}
                alt={media.name || media.title}
                style={{
                    width: "100vw",
                    opacity: "0.3",
                    position: "absolute",
                }}
            />

            <Container sx={{top: "150px", position: "relative", color: "white"}}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Box sx={{
                            backgroundColor: "rgba(33,32,32,0.1)",
                            backdropFilter: "blur(5px)",
                            borderRadius: "10px",
                            padding: "15px",
                            textAlign: "center",
                            fontSize: "16px",
                            boxShadow: "0px 0px 39px 7px rgba(0,0,0,0.73)",
                            WebkitBoxShadow: "0px 0px 39px 7px rgba(0,0,0,0.73)",
                            MozBoxShadow: "0px 0px 39px 7px rgba(0,0,0,0.73)"
                        }}>
                            <Stack spacing={2}>
                                <img
                                    src={originalImage(media.poster_path)}
                                    alt={media.name || media.title}
                                />

                                {media && media.production_countries ?
                                    (media.production_countries.slice(0, 1).map((country, index) => (
                                        <p key={index}>
                                            <b>Country : </b><br/>{country.name}</p>
                                    ))) : null
                                }

                                {media.production_companies ? (
                                    media.production_companies.slice(0, 1).map((company) => (
                                        <Stack direction="column"
                                               alignItems="center"
                                               spacing={2}
                                               key={company.id}
                                        >
                                            <p><b>Company : </b></p>
                                            <img src={originalImage(company.logo_path)} alt={company.name}
                                                 width="60%"/>
                                        </Stack>
                                    ))
                                ) : null}

                                {
                                    !TV ?
                                        <p><b>Runtime : </b><br/>{media.runtime} min</p> : null
                                }

                                {
                                    (media.budget ?
                                        <p><b>Budget : </b><br/>{media.budget} $</p> : null)
                                }
                            </Stack>
                        </Box>
                    </Grid>

                    <Grid item xs={9}>
                        <Box sx={{
                            backgroundColor: "rgb(33,32,32,0.1)",
                            backdropFilter: "blur(5px)",
                            borderRadius: "10px",
                            padding: "15px",
                            textAlign: "center",
                            color: "white",
                            fontSize: "16px",
                            boxShadow: "0px 0px 39px 7px rgba(0,0,0,0.73)",
                            WebkitBoxShadow: "0px 0px 39px 7px rgba(0,0,0,0.73)",
                            MozBoxShadow: "0px 0px 39px 7px rgba(0,0,0,0.73)"
                        }}>
                            <Stack direction="column" spacing={2}>
                                <Stack direction="row" justifyContent="space-between">
                                    <Stack direction="row" spacing={2} alignItems="center">
                                        <h4 style={{fontWeight: "700"}}>
                                            {media.title || media.name}
                                        </h4>
                                        {
                                            !TV ?
                                                <h4>( {(media.release_date ? media.release_date.substring(0, 4) : "")} )</h4> :
                                                <h4>( {(media.first_air_date ? media.first_air_date.substring(0, 4) : "")} )</h4>
                                        }
                                    </Stack>
                                    <Stack direction="row" spacing={2} alignItems="center">
                                        <img src={imdb} alt="imdb" height={30}/>
                                        <CircularRate value={media.vote_average}/>
                                    </Stack>
                                </Stack>

                                {
                                    TV ? (
                                        <p style={{textAlign: "start"}}>
                                            {media.number_of_seasons} {media.number_of_seasons === 1 ? 'season' : 'seasons'}
                                        </p>
                                    ) : null
                                }

                                <Stack direction="row" spacing={2} alignItems="center"
                                       justifyContent="flex-start">
                                    {media && media.genres ?
                                        (media.genres.map(genre =>
                                            <p key={genre.id}
                                               style={{
                                                   backgroundColor: "red",
                                                   borderRadius: "5px",
                                                   padding: "5px"
                                               }}>{genre.name}</p>
                                        )) : null
                                    }
                                </Stack>

                                <Swiper
                                    modules={[Navigation]}
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    grabCursor={true}
                                    navigation
                                    style={{height: "500px", width: "100%"}}
                                >
                                    {videos.slice(0, 5).map(video =>
                                        <SwiperSlide key={video.id}>
                                            <iframe
                                                key={video.key}
                                                src={youtubePath(video.key)}
                                                width="100%"
                                                height="100%"
                                                title={video.id}
                                                style={{border: 0}}
                                            ></iframe>
                                        </SwiperSlide>)}
                                </Swiper>
                                <p>{media.overview}</p>

                                <Box>
                                    <hr/>
                                    <h4 style={{fontWeight: "700"}}>
                                        Cast
                                    </h4>
                                    <Grid container rowSpacing={2}>
                                        {credits && credits.cast ? (
                                            credits.cast.slice(0, 6).map(char =>
                                                <Grid item xs={6} md={4}>
                                                    <Card key={char.credit_id} sx={{
                                                        height: "100px",
                                                        fontSize: "11px",
                                                        backgroundColor: "rgb(33,32,32,0.1)",
                                                        backdropFilter: "blur(5px)",
                                                        borderRadius: "10px",
                                                        mx: "7px",

                                                        boxShadow: "0px 0px 20px 7px rgba(0,0,0,0.4)",
                                                        WebkitBoxShadow: "0px 0px 20px 7px rgba(0,0,0,0.4)",
                                                        MozBoxShadow: "0px 0px 20px 7px rgba(0,0,0,0.4)"
                                                    }}
                                                    >
                                                        <Link to={`/person/${char.id}`}
                                                              style={{color: "white", textDecoration: "none"}}>
                                                            <CardActionArea>
                                                                <Stack direction="row">
                                                                    <CardMedia
                                                                        component="img"
                                                                        image={originalImage(char.profile_path)}
                                                                        alt={char.name}
                                                                        sx={{width: "25%"}}
                                                                    />
                                                                    <CardContent sx={{
                                                                        display: "flex",
                                                                        flexDirection: "column",
                                                                        alignItems: "flex-start"
                                                                    }}>
                                                                        <p><b>{char.name}</b></p>
                                                                        <p>{char.character}</p>
                                                                    </CardContent>
                                                                </Stack>
                                                            </CardActionArea>
                                                        </Link>
                                                    </Card>
                                                </Grid>
                                            )) : null
                                        }
                                    </Grid>
                                </Box>
                                <Box>
                                    <hr/>
                                    <h4 style={{fontWeight: "700"}}>Crew</h4>
                                    <Grid container rowSpacing={2}>
                                        {credits && credits.crew ? (
                                            credits.crew.slice(0, 5).map(person =>
                                                <Grid item xs={6} md={4}>
                                                    <Card key={person.credit_id} sx={{
                                                        height: "100px",
                                                        fontSize: "11px",
                                                        backgroundColor: "rgb(33,32,32,0.1)",
                                                        backdropFilter: "blur(5px)",
                                                        borderRadius: "10px",
                                                        mx: "7px",

                                                        boxShadow: "0px 0px 20px 7px rgba(0,0,0,0.4)",
                                                        WebkitBoxShadow: "0px 0px 20px 7px rgba(0,0,0,0.4)",
                                                        MozBoxShadow: "0px 0px 20px 7px rgba(0,0,0,0.4)"
                                                    }}
                                                    >
                                                        <Link to={`/person/${person.id}`}
                                                              style={{color: "white", textDecoration: "none"}}>
                                                            <CardActionArea>
                                                                <Stack direction="row">
                                                                    <CardMedia
                                                                        component="img"
                                                                        image={originalImage(person.profile_path)}
                                                                        alt={person.name}
                                                                        sx={{width: "25%"}}
                                                                    />
                                                                    <CardContent sx={{
                                                                        display: "flex",
                                                                        flexDirection: "column",
                                                                        alignItems: "flex-start"
                                                                    }}>
                                                                        <p><b>{person.name}</b></p>
                                                                        <p>{person.job}</p>
                                                                    </CardContent>
                                                                </Stack>
                                                            </CardActionArea>
                                                        </Link>
                                                    </Card>
                                                </Grid>
                                            )) : null
                                        }
                                    </Grid>
                                </Box>
                            </Stack>
                            <Box>
                                <hr/>
                                <h4 style={{fontWeight: "700"}}>Reviews</h4>
                                <Button variant="contained" color="error" sx>Add review</Button>
                                {reviews && reviews.results ? (
                                    reviews.results.map((review) => (
                                        <Card key={review.id}
                                              sx={{
                                                  fontSize: "14px",
                                                  backgroundColor: "rgba(255,255,255,0.1)",
                                                  backdropFilter: "blur(5px)",
                                                  borderRadius: "10px",
                                                  mx: "7px",
                                                  my: "20px",
                                                  color: 'white',


                                              }}
                                        >
                                            <CardHeader avatar={
                                                <Avatar sx={{bgcolor: red[500]}} aria-label="avatar">
                                                    <img src={w500Image(review.author_details.avatar_path)}
                                                         alt="avatar"/>
                                                </Avatar>
                                            }
                                                        title={<p><b>{review.author_details.username}</b></p>}
                                                        subheader={
                                                            <p style={{
                                                                color: 'white',
                                                                fontSize: "11px",
                                                            }}>{format(parseISO(review.created_at), 'MMMM d, yyyy HH:mm')}</p>}
                                            />
                                            <CardContent>
                                                <p>
                                                    {review.content}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    ))
                                ) : null}
                            </Box>
                        </Box>
                    </Grid>

                </Grid>
                <Box>
                    <hr/>
                    <h4 style={{fontWeight: "700"}}>Similar</h4>
                    {similar && similar.results ? (
                        similar.results.map(item => (
                            <MediaCard key={item.id} media={item} mediaType={mediaType}/>
                        ))
                    ) : null}
                </Box>
            </Container>
            {
                error && <h1>Error:(</h1>
            }
        </Box>
    );
}

export {
    MediaDetails
}

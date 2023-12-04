 import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {mediaActions} from "../redux/slices/media.slice";
import {Container, Grid} from "@mui/material";
import {originalImage} from "../api/apiConfig";
import {Box, Stack} from "@mui/system";

const PersonDetails = ({personId}) => {

    const dispatch = useDispatch();
    const {person, personMedia, error} = useSelector(state => state.mediaReducer);

    useEffect(() => {
        dispatch(mediaActions.getPerson(personId))
    }, [dispatch, personId])

    useEffect(() => {
        dispatch(mediaActions.getPersonMedia(personId))
    }, [dispatch, personId])

    return (
        <Container sx={{color: "white", marginTop: "100px"}}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Box sx={{
                        backgroundColor: "rgba(255,255,255,0.1)",
                        backdropFilter: "blur(5px)",
                        borderRadius: "10px",
                        padding: "15px",
                        fontSize: "14px",
                        boxShadow: "0px 0px 39px 7px rgba(0,0,0,0.73)",
                        WebkitBoxShadow: "0px 0px 39px 7px rgba(0,0,0,0.73)",
                        MozBoxShadow: "0px 0px 39px 7px rgba(0,0,0,0.73)"
                    }}>
                        <Stack spacing={2}>
                            <img
                                src={originalImage(person.profile_path)}
                                alt={person.name}
                            />

                            {
                                person && person.birthday ? (
                                    person.deathday !== null ? (
                                        <h5 style={{textAlign: "center"}}>( {person.birthday.substring(0, 4)} - {person.deathday.substring(0, 4)} )</h5>
                                    ) : <h5 style={{textAlign: "center"}}>( {person.birthday.substring(0, 4)} )</h5>
                                ) : null
                            }


                            {
                                person && person.place_of_birth ? (
                                    <Stack direction="column"
                                           alignItems="center"
                                           spacing={2}
                                           key={person.id}
                                    >
                                        <p><b>Place of birth : </b></p>
                                        <p>{person.place_of_birth}</p>
                                    </Stack>
                                ) : null
                            }

                            {
                                person && person.known_for_department ? (
                                    <Stack direction="column"
                                           alignItems="center"
                                           spacing={2}
                                           key={person.id}
                                    >
                                        <p><b>Known for : </b></p>
                                        <p>{person.known_for_department}</p>
                                    </Stack>
                                ) : null
                            }
                        </Stack>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <Box sx={{
                        backgroundColor: "rgba(255,255,255,0.1)",
                        backdropFilter: "blur(5px)",
                        borderRadius: "10px",
                        padding: "15px",
                        fontSize: "12px",
                        boxShadow: "0px 0px 39px 7px rgba(0,0,0,0.73)",
                        WebkitBoxShadow: "0px 0px 39px 7px rgba(0,0,0,0.73)",
                        MozBoxShadow: "0px 0px 39px 7px rgba(0,0,0,0.73)"
                    }}>
                        <Stack direction="column" spacing={2}>
                            <h3 style={{fontWeight: "700"}}>
                                {person.name}
                            </h3>
                            <p><i>{person.biography}</i></p>
                            //swiper
                        </Stack>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
        ;
}

export {PersonDetails}
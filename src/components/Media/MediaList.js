import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {mediaActions} from "../../redux/slices/media.slice";
import {Box, Container, Pagination} from "@mui/material";
import {MediaCard} from "./MediaCard";


const MediaList = ({mediaType}) => {
    const dispatch = useDispatch();

    const {list, total_pages, currentPageMedia} = useSelector((state) => state.mediaReducer);


    useEffect(() => {
        dispatch(mediaActions.getAllMedia(mediaType));
    }, [dispatch, mediaType]);

    return (
        <Box>
            <Container
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(20%, 1fr))",
                    gap: "15px",
                    my: "15px",
                }}
            >
                {
                    list.map((media) => <MediaCard key={media.id} media={media} mediaType={mediaType}/>)
                }
            </Container>
            <Pagination count={total_pages} page={page} variant="outlined" color="warning"

            />
        </Box>
    );
}

export {MediaList}
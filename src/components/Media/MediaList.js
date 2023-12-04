import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {mediaActions} from "../../redux/slices/media.slice";
import {Container} from "@mui/material";
import {MediaCard} from "./MediaCard";

const MediaList = ({mediaType}) => {
    const dispatch = useDispatch();
    const {list, loading, error} = useSelector((state) => state.mediaReducer);

    useEffect(() => {
        dispatch(mediaActions.getAllMedia(mediaType));
    }, [dispatch, mediaType]);
    return (
        <Container
            sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
            }}
        >
            {
                list.map((media) => <MediaCard key={media.id} media={media} mediaType={mediaType}/>)
            }
        </Container>
    );
}

export {MediaList}
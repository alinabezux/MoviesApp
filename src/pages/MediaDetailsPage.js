import {useParams} from "react-router-dom";
import {MediaDetails} from "../components/Media/MediaDetails";
import {Box} from "@mui/system";


const MediaDetailsPage = () => {
    const {mediaType, id} = useParams();

    return (
        <Box>
            <MediaDetails key={id} mediaType={mediaType} mediaId={id}/>
            {/* reviews*/}
            {/* similar*/}
        </Box>
    );
}

export {MediaDetailsPage}
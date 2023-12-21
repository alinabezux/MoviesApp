import {MainBanner, Filter, MediaList} from "../components";
import {mediaCategory} from "../api";
import {Box} from "@mui/system";

const MediaPage = ({mediaType}) => {
    //FILTER
    //genres
    //year
    //popularity або topRated airing(все решта пропадає)
    //рейтинг по цифрах

    return (
        <Box>
            <MainBanner mediaType={mediaType} mediaCategory={mediaCategory.popular}/>
            <Filter mediaType={mediaType}/>
            <MediaList mediaType={mediaType}/>
        </Box>
    );
}

export {MediaPage}
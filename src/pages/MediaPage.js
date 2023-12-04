import {MainBanner} from "../components/MainBanner";
import {mediaCategory} from "../api/apiConfig";
import {Filter} from "../components/Filter";
import {MediaList} from "../components/Media/MediaList";

const MediaPage = ({mediaType}) => {
    //FILTER
    //genres
    //year
    //popularity або topRated airing(все решта пропадає)
    //рейтинг по цифрах

    return (

        <>
            <MainBanner mediaType={mediaType} mediaCategory={mediaCategory.popular}/>
            <Filter mediaType={mediaType}/>
            <MediaList mediaType={mediaType}/>
        </>
    );
}

export {MediaPage}
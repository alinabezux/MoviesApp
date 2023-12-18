import {MainBanner, Filter, MediaList} from "../components";
import {mediaCategory} from "../api";

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
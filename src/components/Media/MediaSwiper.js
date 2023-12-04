import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {MediaCard} from "./MediaCard";
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation} from 'swiper/modules';
import {mediaActions} from "../../redux/slices/media.slice";

const MediaSwiper = ({mediaType, mediaCategory}) => {
    const dispatch = useDispatch();
    const {listWithCategory} = useSelector((state) => state.mediaReducer);

    useEffect(() => {
        dispatch(mediaActions.getMediaByCategory({mediaType, mediaCategory}))
    }, [dispatch, mediaType, mediaCategory]);


    return (
        <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView="auto"
            grabCursor={true}
            navigation
        >
            {
                listWithCategory.map((media) =>
                    (<SwiperSlide key={media.id}>
                        <MediaCard media={media}
                                   mediaType={mediaType}/>
                    </SwiperSlide>)
                )
            }
        </Swiper>
    );
}

export {MediaSwiper}
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {MediaCard} from "./MediaCard";
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation} from 'swiper/modules';
import {mediaActions} from "../../redux/slices/media.slice";
import {Container} from "@mui/material";
import {Box} from "@mui/system";

const MediaSwiper = ({mediaType, mediaCategory}) => {
    const dispatch = useDispatch();
    const {listWithCategory} = useSelector((state) => state.mediaReducer);

    useEffect(() => {
        dispatch(mediaActions.getMediaByCategory({mediaType, mediaCategory}))
    }, [dispatch, mediaType, mediaCategory]);


    return (
        <Box sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
        }}>
            <Swiper
                modules={[Navigation]}
                spaceBetween={2}
                slidesPerView={4}  // Set the number of slides per view to 4
                grabCursor={true}
                navigation
                // style={{width: "100%"}}
            >
                {listWithCategory ? (
                    listWithCategory.map(item => (
                        <SwiperSlide key={item.id}>
                            <MediaCard media={item} mediaType={mediaType}/>
                        </SwiperSlide>
                    ))
                ) : null}
            </Swiper>
        </Box>

    );
}

export {MediaSwiper}
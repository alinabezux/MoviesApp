import {mediaCategory, mediaType} from "../api";
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import {Box, Container, Typography} from "@mui/material";
import 'swiper/css';
import {MediaSwiper, MainBanner, MediaCard} from "../components";
import {Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {mediaActions} from "../redux/slices/media.slice";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
// import {mediaType, mediaCategory} from "../api";


const HomePage = () => {
    const dispatch = useDispatch();
    const {listWithCategory} = useSelector((state) => state.mediaReducer);

    useEffect(() => {
        dispatch(mediaActions.getMediaByCategory({mediaType: mediaType.movie, mediaCategory: mediaCategory.popular}))
    }, [dispatch]);

    return (
        <Box>
            <MainBanner mediaType={mediaType.movie} mediaCategory={mediaCategory.upcoming}/>
            <Container sx={{marginTop: "-80px"}}>
                {/*<Tabs aria-label="tabs" defaultValue="0"*/}
                {/*      sx={{bgcolor: 'transparent', top: "-180px"}}>*/}
                {/*    <TabList disableUnderline*/}
                {/*             sx={{*/}
                {/*                 p: 0.5,*/}
                {/*                 mb: 6,*/}
                {/*                 gap: 2,*/}
                {/*                 borderRadius: 'md',*/}
                {/*                 mx: "40%"*/}
                {/*             }}*/}
                {/*    >*/}
                {/*        <Tab disableIndicator value="0">MOVIES</Tab>*/}
                {/*        <Tab disableIndicator value="1">TV SERIES</Tab>*/}
                {/*    </TabList>*/}

                {/*    <TabPanel value="0">*/}
                <Box>
                    <Typography variant="h5" fontWeight="700" textTransform="uppercase" color="red" textAlign="center"
                                sx={{fontFamily: "Montserrat"}}>Popular movies</Typography>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        my: "15px"
                    }}>
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={2}
                            slidesPerView={4}  // Set the number of slides per view to 4
                            grabCursor={true}
                            navigation
                        >
                            {listWithCategory ? (
                                listWithCategory.map(item => (
                                    <SwiperSlide key={item.id}>
                                        <MediaCard media={item} mediaType={mediaType.movie}/>
                                    </SwiperSlide>
                                ))
                            ) : null}
                        </Swiper>
                    </Box>
                </Box>

                <Box>
                    <Typography variant="h5" fontWeight="700" textTransform="uppercase" color="red" textAlign="center"
                                sx={{fontFamily: "Montserrat"}}>TOP-RATED movies</Typography>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        my: "15px"
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
                                        <MediaCard media={item} mediaType={mediaType.movie}/>
                                    </SwiperSlide>
                                ))
                            ) : null}
                        </Swiper>
                    </Box>
                </Box>
                {/*    </TabPanel>*/}

                {/*    <TabPanel value="1">*/}
                <Box>
                    <Typography variant="h5" fontWeight="700" textTransform="uppercase" color="red" textAlign="center"
                                sx={{fontFamily: "Montserrat"}}>Popular TV series</Typography>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        my: "15px"
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
                                        <MediaCard media={item} mediaType={mediaType.movie}/>
                                    </SwiperSlide>
                                ))
                            ) : null}
                        </Swiper>
                    </Box>
                </Box>

                <Box>
                    <Typography variant="h5" fontWeight="700" textTransform="uppercase" color="red" textAlign="center"
                                sx={{fontFamily: "Montserrat"}}>TOP-RATED tv series</Typography>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        my: "15px"
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
                                        <MediaCard media={item} mediaType={mediaType.movie}/>
                                    </SwiperSlide>
                                ))
                            ) : null}
                        </Swiper>
                    </Box>
                </Box>
                {/*    </TabPanel>*/}
                {/*</Tabs>*/}
            </Container>
            {/*<Outlet/>*/}
        </Box>
    );
}

export {
    HomePage
}
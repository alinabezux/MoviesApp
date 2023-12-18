import {mediaCategory, mediaType} from "../api";
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import {Box, Typography} from "@mui/material";
import 'swiper/css';
import {MediaSwiper, MainBanner} from "../components";
import {Outlet} from "react-router-dom";


const HomePage = () => {
    return (
        <Box>
            <MainBanner mediaType={mediaType.movie} mediaCategory={mediaCategory.upcoming}/>
            <Box>
                <Tabs aria-label="tabs" defaultValue={0}
                      sx={{bgcolor: 'transparent', top: "-180px", display: "flex", alignItems: "center", mx: "70px"}}>
                    <TabList
                        disableUnderline
                        sx={{
                            p: 0.5,
                            mb: 6,
                            gap: 2,
                            borderRadius: 'md',
                        }}
                    >
                        <Tab disableIndicator>MOVIES</Tab>
                        <Tab disableIndicator>TV SERIES</Tab>
                    </TabList>

                    <TabPanel value={0}>
                        <Box>
                            <Box>
                                <Typography variant="h5" fontWeight="700" textTransform="uppercase" color="red"
                                            sx={{fontFamily: "Montserrat"}}>Popular movies</Typography>
                                <MediaSwiper mediaType={mediaType.movie} mediaCategory={mediaCategory.popular}/>
                            </Box>
                            <Box>
                                <Typography variant="h5" fontWeight="700" textTransform="uppercase" color="red"
                                            sx={{fontFamily: "Montserrat"}}>Top-rated
                                    movies</Typography>
                                <MediaSwiper mediaType={mediaType.movie} mediaCategory={mediaCategory.top_rated}/>
                            </Box>
                        </Box>
                    </TabPanel>
                    <TabPanel value={1}>
                        <Box>
                            <Box>
                                <Typography variant="h5" fontWeight="700" textTransform="uppercase" color="red"
                                            sx={{fontFamily: "Montserrat"}}>Popular tv series</Typography>
                                <MediaSwiper mediaType={mediaType.tv} mediaCategory={mediaCategory.popular}/>
                            </Box>
                            <Box>
                                <Typography variant="h5" fontWeight="700" textTransform="uppercase" color="red"
                                            sx={{fontFamily: "Montserrat"}}>Top-rated
                                    tv-series</Typography>
                                <MediaSwiper mediaType={mediaType.tv} mediaCategory={mediaCategory.top_rated}/>
                            </Box>
                        </Box>
                    </TabPanel>
                </Tabs>
            </Box>
            {/*<Outlet/>*/
            }
        </Box>
    );
}

export {HomePage}
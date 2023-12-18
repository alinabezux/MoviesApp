import {Header} from "../components";
import {Outlet} from "react-router-dom";
import {Box} from "@mui/system";

const MainLayout = () => {
    return (
        <Box>
            <Header/>
            <Outlet/>
        </Box>
    );
}

export {MainLayout}
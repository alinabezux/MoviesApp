import {Box} from "@mui/system";
import {useParams} from "react-router-dom";
import {PersonDetails} from "../components";

const PersonPage = () => {
    const {id} = useParams();
    console.log(id);
    return (
        <Box>
            <PersonDetails personId={id}/>
        </Box>
    );
}

export {PersonPage}
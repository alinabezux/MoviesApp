import {Select, Stack, Option, Chip, Box, Slider} from "@mui/joy";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {mediaActions} from "../redux/slices/media.slice";

const Filter = ({mediaType}) => {
    const dispatch = useDispatch();
    const {genres} = useSelector(state => state.mediaReducer);

    useEffect(() => {
        dispatch(mediaActions.getGenres(mediaType))
    }, [dispatch, mediaType]);

    const [value, setValue] = useState([1, 10]);

    function valueText(value) {
        return `${value}`;
    }

    const handleChangeRating = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box>
            <Stack direction="row"
                   justifyContent="center"
                   alignItems="center"
                   spacing={5}
            >
                <Select defaultValue="By popularity" variant="soft" color="danger">
                    <Option value="By popularity">By popularity</Option>
                    <Option value="By rating">By rating</Option>
                    <Option value="By novelty">By novelty</Option>
                </Select>

                <Select color="danger"
                        placeholder="Choose genre"
                        multiple
                        renderValue={(selected) => (
                            <Box sx={{display: 'flex', gap: '0.25rem'}}>
                                {selected.map((selectedOption) => (
                                    <Chip variant="soft" color="danger">
                                        {selectedOption.label}
                                    </Chip>
                                ))}
                            </Box>
                        )}
                        sx={{
                            minWidth: '15rem',
                        }}
                        slotProps={{
                            listbox: {
                                sx: {
                                    width: '100%',
                                },
                            },
                        }}
                >
                    {
                        genres.map(genre =>
                            <Option value={genre.id}>{genre.name}</Option>)
                    }
                </Select>
                <Select defaultValue="2023" variant="soft" color="danger">
                    <Option value="2023">2023</Option>
                    <Option value="2022">2022</Option>
                    <Option value="2021">2021</Option>
                    <Option value="2020">2020</Option>
                    <Option value="2016">2016-2019</Option>
                    <Option value="2010">2010-2015</Option>
                    <Option value="earlier">2009 and earlier...</Option>
                </Select>
                <Slider
                    sx={{"--Slider-trackSize": "5px", width: "250px"}}
                    min={1}
                    max={10}
                    step={1}
                    color="danger"
                    defaultValue={10}
                    getAriaLabel={() => 'Rating'}
                    value={value}
                    onChange={handleChangeRating}
                    valueLabelDisplay="auto"
                    getAriaValueText={valueText}
                />
            </Stack>
        </Box>
    );
}

export {Filter}
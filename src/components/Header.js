import {AppBar, Box, InputBase, Paper, Toolbar, Typography} from "@mui/material";
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import DarkMode from '@mui/icons-material/DarkModeOutlined';
import IconButton from '@mui/material/IconButton';

// import AccountCircleIcon from '@mui/icons-material/AccountCircleOutlined';
import logo from '../assets/shine 4.svg';
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <AppBar position="fixed" elevation={0} sx={{backgroundColor: "transparent", height: "10vh"}}>
            <Toolbar>
                <Typography>
                    <Link to={"/home"}>
                        <IconButton>
                            <img src={logo} alt="logo" height={80} style={{marginBottom: "-15px"}}/>
                        </IconButton>
                    </Link>
                </Typography>
                <Box>
                    <Link to={"/movie"} style={{color: "white", textDecoration: 'none'}}>
                        <Button
                            color="inherit"
                            style={{
                                transition: 'box-shadow 0.5s',
                            }}
                            sx={{
                                '&:hover': {
                                    boxShadow: '0 0 10px 3px rgba(255, 0, 0, 0.5)',
                                },
                            }}
                        >
                            Movies
                        </Button>
                    </Link>
                    <Link to={"/tv"} style={{color: "white", textDecoration: 'none'}}>
                        <Button color="inherit"
                                style={{
                                    transition: 'box-shadow 0.5s',
                                }}
                                sx={{
                                    '&:hover': {
                                        boxShadow: '0 0 10px 3px rgba(255, 0, 0, 0.5)',
                                    },
                                }}>TV series</Button>
                    </Link>
                </Box>
                <Box style={{marginLeft: 'auto', display: 'flex', alignItems: 'center'}}>
                    <Paper  color="inherit"
                           sx={{
                               transition: 'box-shadow 0.5s',
                               backgroundColor: "inherit",
                               '&:hover': {
                                   boxShadow: '0 0 10px 3px rgba(255, 0, 0, 0.5)',
                               }
                           }}>
                        <InputBase
                            sx={{ml: 1, flex: 1}}
                            placeholder="Search..."
                        />
                        <IconButton type="button" sx={{p: '10px'}} aria-label="search">
                            <SearchIcon/>
                        </IconButton>
                    </Paper>
                    <IconButton>
                        <DarkMode/>
                    </IconButton>
                    <Link to={'/signIn'}>
                        <Button variant="outlined" color="error">Sign up</Button>
                    </Link>
                    {/*<IconButton color="inherit">*/}
                    {/*    <AccountCircleIcon/>*/}
                    {/*</IconButton>*/}
                    {/*<Typography>username</Typography>*/}
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export {
    Header
}
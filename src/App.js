import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomePage, SignInPage, MediaPage, MediaDetailsPage, MainLayout, PersonPage} from "./pages";
import './/styles'
import {Footer} from "./components";
import {mediaType} from "./api";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route path={'/home'} element={<HomePage/>}/>
                    <Route path={'/movie'} element={<MediaPage mediaType={mediaType.movie}/>}/>
                    <Route path={'/tv'} element={<MediaPage mediaType={mediaType.tv}/>}/>
                    <Route path={'/:mediaType/:id'} element={<MediaDetailsPage/>}/>
                    <Route path={'/signIn'} element={<SignInPage/>}/>
                    <Route path={'/person/:id'} element={<PersonPage/>}/>
                </Route>
            </Routes>
            {/*<Footer/>*/}
        </BrowserRouter>
    );
}

export default App;

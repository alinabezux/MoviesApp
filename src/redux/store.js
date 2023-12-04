import {combineReducers, configureStore} from "@reduxjs/toolkit"
import {mediaReducer} from "./slices/media.slice";


const rootReducer = combineReducers({mediaReducer});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {setupStore};
import {combineReducers, configureStore} from "@reduxjs/toolkit"
import {mediaReducer} from "./slices/media.slice";
import {personReducer} from "./slices/person.slice";


const rootReducer = combineReducers({mediaReducer, personReducer});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {setupStore};
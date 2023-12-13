import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {mediaService} from "../../services/media.service";

const initialState = {
    list: [],
    listWithCategory: [],
    genres: [],
    media: {},
    selectedMedia: null,
    videos: [],
    credits: {},
    personSearch: [],
    person: {},
    page: 1,
    loading: false,
    error: null
}

const getAllMedia = createAsyncThunk(
    'mediaSlice/getAllMedia',
    async (mediaType, {rejectedWithValue}) => {
        try {
            const {data} = await mediaService.list(mediaType);
            return data.results;
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const getOneMedia = createAsyncThunk(
    'mediaSlice/getOneMedia',
    async ({mediaType, mediaId}, {rejectedWithValue}) => {
        try {
            const {data} = await mediaService.details(mediaType, mediaId);
            return data;
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const getMediaByCategory = createAsyncThunk(
    'mediaSlice/getMediaByCategory',
    async ({mediaType, mediaCategory}, {rejectWithValue}) => {
        try {
            const {data} = await mediaService.category(mediaType, mediaCategory);
            return data.results;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getGenres = createAsyncThunk(
    'mediaSlice/getGenres',
    async (mediaType, {rejectWithValue}) => {
        try {
            const {data} = await mediaService.genres(mediaType);
            return data.genres;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);


const getMediaVideos = createAsyncThunk(
    'mediaSlice/getMediaVideos',
    async ({mediaType, mediaId}, {rejectedWithValue}) => {
        try {
            const {data} = await mediaService.videos(mediaType, mediaId);
            return data.results;
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const getMediaCredits = createAsyncThunk(
    'mediaSlice/getMediaCredits',
    async ({mediaType, mediaId}, {rejectedWithValue}) => {
        try {
            const {data} = await mediaService.credits(mediaType, mediaId);
            return data;
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const getPerson = createAsyncThunk(
    'mediaSlice/getPerson',
    async (personId, {rejectedWithValue}) => {
        try {
            const {data} = await mediaService.person(personId);
            return data;
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const getPersonMedias = createAsyncThunk(
    'mediaSlice/getPersonMedia',
    async (personName, {rejectedWithValue}) => {
        try {
            const {data} = await mediaService.personMedias(personName);
            console.log(data.results);
            return data.results;
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const mediaSlice = createSlice({
    name: 'mediaSlice',
    initialState,
    reducers: {
        setSelectedMedia: (state, action) => {
            state.selectedMedia = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAllMedia.fulfilled, (state, action) => {
                state.list = action.payload
                state.loading = false
                state.error = null
            })
            .addCase(getAllMedia.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(getAllMedia.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })


            .addCase(getOneMedia.fulfilled, (state, action) => {
                state.media = action.payload
                state.loading = false
                state.error = null
            })
            .addCase(getOneMedia.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(getOneMedia.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })


            .addCase(getMediaByCategory.fulfilled, (state, action) => {
                state.listWithCategory = action.payload
                state.loading = false
                state.error = null
            })
            .addCase(getMediaByCategory.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(getMediaByCategory.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })


            .addCase(getGenres.fulfilled, (state, action) => {
                state.genres = action.payload
                state.loading = false
                state.error = null
            })
            .addCase(getGenres.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(getGenres.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })


            .addCase(getMediaVideos.fulfilled, (state, action) => {
                state.videos = action.payload
                state.loading = false
                state.error = null
            })
            .addCase(getMediaVideos.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(getMediaVideos.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })


            .addCase(getMediaCredits.fulfilled, (state, action) => {
                state.credits = action.payload
                state.loading = false
                state.error = null
            })
            .addCase(getMediaCredits.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(getMediaCredits.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })

            .addCase(getPerson.fulfilled, (state, action) => {
                state.person = action.payload
                state.loading = false
                state.error = null
            })
            .addCase(getPerson.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(getPerson.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })

            .addCase(getPersonMedias.fulfilled, (state, action) => {
                state.personSearch = action.payload
                state.loading = false
                state.error = null
            })
            .addCase(getPersonMedias.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(getPersonMedias.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })

})

const {reducer: mediaReducer, actions: {setSelectedMedia}} = mediaSlice;

const mediaActions = {
    getAllMedia,
    setSelectedMedia,
    getOneMedia,
    getMediaByCategory,
    getGenres,
    getMediaVideos,
    getMediaCredits,
    getPerson,
    getPersonMedias
}

export {mediaReducer, mediaActions}
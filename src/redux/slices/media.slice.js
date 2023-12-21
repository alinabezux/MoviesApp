import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {mediaService} from "../../services/media.service";

const initialState = {
    list: [],
    listWithCategory: [],
    genres: [],
    media: {},
    videos: [],
    credits: {},
    similar: [],
    reviews: [],

    total_pages: null,
    currentPageMedia: 1,

    loading: false,
    error: null
}

const getAllMedia = createAsyncThunk(
    'mediaSlice/getAllMedia',
    async ({mediaType, page}, {rejectedWithValue}) => {
        try {
            const {data} = await mediaService.list(mediaType, page);
            return data;
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

const getSimilarMedia = createAsyncThunk(
    'mediaSlice/getSimilarMedia',
    async ({mediaType, mediaId}, {rejectedWithValue}) => {
        try {
            const {data} = await mediaService.similar(mediaType, mediaId);
            return data;
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const getMediaReviews = createAsyncThunk(
    'mediaSlice/getMediaReviews',
    async ({mediaType, mediaId}, {rejectedWithValue}) => {
        try {
            const {data} = await mediaService.reviews(mediaType, mediaId);
            return data;
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);


const mediaSlice = createSlice({
    name: 'mediaSlice',
    initialState,
    reducers: {
        setCurrentPageMedia: (state, action) => {
            state.currentPageMedia = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAllMedia.fulfilled, (state, action) => {
                state.list = action.payload.results
                state.total_pages = action.payload.total_pages
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


            .addCase(getSimilarMedia.fulfilled, (state, action) => {
                state.similar = action.payload
                state.loading = false
                state.error = null
            })
            .addCase(getSimilarMedia.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(getSimilarMedia.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })


            .addCase(getMediaReviews.fulfilled, (state, action) => {
                state.reviews = action.payload
                state.loading = false
                state.error = null
            })
            .addCase(getMediaReviews.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(getMediaReviews.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
})

const {reducer: mediaReducer, actions: {setCurrentPageMedia}} = mediaSlice;

const mediaActions = {
    getAllMedia,
    setCurrentPageMedia,
    getOneMedia,
    getMediaByCategory,
    getGenres,
    getMediaVideos,
    getMediaCredits,
    getSimilarMedia,
    getMediaReviews
}

export {mediaReducer, mediaActions}
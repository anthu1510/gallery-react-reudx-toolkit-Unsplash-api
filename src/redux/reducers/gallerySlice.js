import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getGalleryPhotos = createAsyncThunk("getGalleryPhotos", async (params) => {
    //const queryFetcher = queryString.stringify(params);
    //const urls = `https://api.unsplash.com/search/photos?${queryFetcher}`;
    const accessKey = "GGQk-Sutf_pQanYTUnjVsGVemursVx6NnuhRemVihdo";
    const urls = `https://api.unsplash.com/search/photos?client_id=${accessKey}&page=1&per_page=${params.limit}&query=${params.query}`;
    const result = await axios.get(urls);
    return result.data;
});

const initialState = {
    search: "random",
    limit: 8,
    galleryList: null,
    isPending: null,
    isError: false
};

export const gallerySlice = createSlice({
    name: "gallery",
    initialState,
    reducers: {
        searchUpdate: (state, action) => {
            state.search = action.payload === "" ? state.search : action.payload ;
        },
        updateLimit: (state, action) => {
            state.limit = state.limit + action.payload;
        }
    },
    extraReducers: {
        [getGalleryPhotos.pending]: (state) => {
            state.isPending = true;
        },
        [getGalleryPhotos.rejected]: (state) => {
            state.isError = false;
            state.isPending = null;
        },
        [getGalleryPhotos.fulfilled]: (state,action) => {
            state.isError = false;
            state.isPending = null;
            //state.galleryList = [...state.galleryList, ...action.payload.data.results];
            state.galleryList = action.payload;
        },
    }
});

export const { searchUpdate, updateLimit } = gallerySlice.actions;

export default gallerySlice.reducer;
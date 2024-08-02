import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    users: [],
    user: null,
    error: '',
    loading: ''
}


export const getPostsDataSlice = createAsyncThunk(
    'getPostsData',
    async () => {
        const response =  await axios('https://jsonplaceholder.typicode.com/users/')
        return response.data
    }
)
export const getPostsDataSliceUser = createAsyncThunk(
    'getPostsDataSlice',
    async (idUser) => {
        const response =  await axios(`https://jsonplaceholder.typicode.com/users/${idUser}`)
        return response.data
    }
)




const getDataSlice = createSlice({
    name: 'getPostsData',
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder
            .addCase(getPostsDataSlice.pending, (state) => {
                state.loading = 'Загрузка'
            })
            .addCase(getPostsDataSlice.rejected, (state) => {
                state.error = 'родной ошибка'
            })
            .addCase(getPostsDataSlice.fulfilled, (state, action) => {
                state.users = action.payload
                state.loading = 'Завершена'
            })


            .addCase(getPostsDataSliceUser.pending, (state) => {
                state.loading = 'Загрузка'
            })
            .addCase(getPostsDataSliceUser.rejected, (state) => {
                state.error = 'родной ошибка'
            })
            .addCase(getPostsDataSliceUser.fulfilled, (state, action) => {
                state.user = action.payload
                state.loading = 'Завершена'
            })

    }
})
export default getDataSlice.reducer
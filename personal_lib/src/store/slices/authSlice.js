import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: true,
    loading: false,
    error: null,
    user: {}
};

export const fetchUser = createAsyncThunk(
    'auth/fetchUser',
    async () => {
        try {
            const res = await fetch('https://randomuser.me/api/');
            const data = await res.json();
            return data;
        }catch(error) {
            throw Error(error);
        };
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state, action) => {
            state.isLoggedIn = false;
        }
    },
    extraReducers: {
        [fetchUser.pending]: (state, action) => {
            state.loading = true;
            state.error = false;
        },
        [fetchUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.isLoggedIn = true;
            state.user = action.payload.results;
        },
        [fetchUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        }
    }
});

export const {logout} = authSlice.actions;

export default authSlice.reducer;
import { createAsyncThunk, createSlice  } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAnimals = createAsyncThunk('animal/getAnimals',async()=>{
    let data = await axios.get("https://wildlife-backend-oo00.onrender.com/wildlife");
    // let data = await axios.get("http://localhost:8080/wildlife");
    return data.data
})

const animalSlice = createSlice({
    name:'animal',
    initialState:{
        animals:[],
        search:"",
        status:"idle",
        error:""
    },
    reducers: {
       getSearched:(state,action)=>{
           state.search = action.payload;
       }
    },
    extraReducers:(builder)=>{
        builder
            .addCase(getAnimals.pending,(state)=>{
                state.status='loading';
            })
            .addCase(getAnimals.fulfilled,(state,action)=>{
                state.status='fulfilled'
                state.animals=action.payload
            })
            .addCase(getAnimals.rejected,(state,action)=>{
                state.status='rejected'
                state.error=action.error.message
            })
    }
})

export const { getSearched } = animalSlice.actions;

export default animalSlice.reducer;
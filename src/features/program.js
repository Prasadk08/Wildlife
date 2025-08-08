import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPrograms = createAsyncThunk("program/getPrograms", async () => {
  let res = await axios.get("https://wildlife-backend-oo00.onrender.com/programs");
  return res.data;
});

const programSlice = new createSlice({
  name: "program",
  initialState: {
    programs: [],
    loading: false,
    error: false,
  },
  reducers: {
    searchData:(state,action)=>{
      state.programs=[]
      state.programs.push(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPrograms.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPrograms.fulfilled, (state, action) => {
        state.loading = false;
        state.programs = action.payload;
      })
      .addCase(getPrograms.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { searchData } = programSlice.actions;

export default programSlice.reducer;

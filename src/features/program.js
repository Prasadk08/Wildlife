import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPrograms = createAsyncThunk("program/getPrograms", async () => {
  let res = await axios.get("https://wildlife-xdqb.onrender.com/getPrograms");
  return res.data;
});

const programSlice = new createSlice({
  name: "program",
  initialState: {
    programs: [],
    loading: false,
    error: false,
  },
  reducers: {},
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

export default programSlice.reducer;

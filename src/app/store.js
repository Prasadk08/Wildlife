import { configureStore } from "@reduxjs/toolkit";
import animalReducer from "../features/animal";
import programReducer  from "../features/program";

export const store = configureStore({
    reducer:{
        animal: animalReducer,
        program: programReducer
    }
})



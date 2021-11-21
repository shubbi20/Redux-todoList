import todoreducer from "./todosearchslice";

import { configureStore } from '@reduxjs/toolkit'

export const store= configureStore({
   
    reducer: {
        todos:todoreducer,
    },    
})


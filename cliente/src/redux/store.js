import {configureStore} from '@reduxjs/toolkit'
import items from './slice'
export const store =  configureStore({
    reducer:{
       "dataBase":items
    }
})
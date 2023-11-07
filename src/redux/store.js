import { configureStore } from '@reduxjs/toolkit'
import mainReducer from './reducers/mainreducers'

const store = configureStore({
    reducer: {
        main: mainReducer,
        },
})


export default store
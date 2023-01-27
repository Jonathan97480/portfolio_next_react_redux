import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import { HeaderStatuSlice } from './slice/headerStatu.Slice'

export const store = () =>
    configureStore({
        reducer: {
            [HeaderStatuSlice.name]: HeaderStatuSlice.reducer,
        },
        devTools: true,
    })

export type RootState = ReturnType<typeof store>

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>
export const wrapper = createWrapper(store, { debug: true })

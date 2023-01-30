import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import { HeaderStatuSlice } from './slice/headerStatu.Slice'
import { ProjectSlice } from './slice/projectSlice'
import { ClientStatuSlice } from './slice/clientSlice'

export const store = () =>
    configureStore({
        reducer: {
            [HeaderStatuSlice.name]: HeaderStatuSlice.reducer,
            [ProjectSlice.name]: ProjectSlice.reducer,
            [ClientStatuSlice.name]: ClientStatuSlice.reducer,
        },
        devTools: true,
    })

export type RootState = ReturnType<typeof store>

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>
export const wrapper = createWrapper(store, { debug: true })

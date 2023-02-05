import { createSlice } from '@reduxjs/toolkit'

export interface ClientInterface {
    blocked: boolean;
    confirmed: boolean;
    email: string;
    id: number;
    username: string;
    jwt: string;
}

export interface ClientState {
    client: ClientInterface | null;
    error: string | null;
}

const initialState: ClientState = {
    client: null,
    error: null,
}

export const ClientStatuSlice = createSlice({
    name: 'Client',
    initialState,
    reducers: {
        setClient: (state, action) => {
            state.client = action.payload
            state.error = null
        },

        setError: (state, action) => {
            state.error = action.payload
        },
        clearClient: (state, action) => {
            state.client = null
            state.error = null
        }

    },
})

export const { setClient, setError, clearClient } = ClientStatuSlice.actions

export const selectClient = (state: any) => state.Client.client
export const selectPartenairesLoading = (state: any) => state.Client.loading

export default ClientStatuSlice.reducer

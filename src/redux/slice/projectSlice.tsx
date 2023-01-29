import { Project } from '@/pages/api/hello'
import { createSlice } from '@reduxjs/toolkit'

export interface ProjectState {
    project: Project[]
    error: string | null
}

const initialState: ProjectState = {
    project: [],
    error: null,
}

export const ProjectSlice = createSlice({
    name: 'Project',
    initialState,
    reducers: {

        setProject: (state, action) => {
            state.project = action.payload
            state.error = null
        },
        setError: (state, action) => {
            state.error = action.payload
        },
    },
})

export const { setError, setProject } = ProjectSlice.actions

export const selectProjects = (state: any) => state.Header.project


export default ProjectSlice.reducer

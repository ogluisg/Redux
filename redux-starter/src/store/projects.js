import { createSlice } from '@reduxjs/toolkit';

// id holder
let lastId = 0;

const slice = createSlice({
    name:'projects',
    initialState: [],
    reducers: {
        // action => action handler
        projectAdded: (projects, action) => {
            projects.push({ id: ++lastId, name: action.payload.name })
        }
    }
})

export const { projectAdded } = slice.actions;
export default slice.reducer;
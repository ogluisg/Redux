import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

// id holder
let lastId = 0;

const slice = createSlice({
    name: 'bugs',
    initialState: [],
    reducers: {

        bugAdded: (bugs, action) => {
            bugs.push({ id: ++lastId, description: action.payload.description, resolved: false})
        },
        bugResolved: (bugs, action) => {
            const index = bugs.findIndex((bug) => bug.id === action.payload.id);
            bugs[index].resolved = true;
        },
        bugRemoved: (bugs, action) => {
            bugs.filter((bug) => bug.id !== action.payload.id)
        },

        bugAssignToUser: (bugs, action) => {
            const { bugId, userId } = action.payload;
            const index = bugs.findIndex((bug) => bug.id === bugId);
            bugs[index].userId = userId;
        }
    }
})

//export const getUnresolvedBugs = (state) => { return state.entities.bugs.filter((bug) => !bug.resolved) }
 
export const getUnresolvedBugs = createSelector(
    state => state.entities.bugs, 
    state => state.entities.projects,
    (bugs, projects) => bugs.filter((bug) => !bug.resolved)
)

export const getBugsByUser = (userId) => createSelector(
    state => state.entities.bugs,
    (bugs) => bugs.filter((bug) => bug.userId === userId)
)

export const { bugAdded, bugRemoved, bugResolved, bugAssignToUser} = slice.actions;
export default slice.reducer;


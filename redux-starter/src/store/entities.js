import { combineReducers } from 'redux';
import bugsReducer from './bugs';
import usersReducer from './users';
import projectsReducer from './projects';

export default combineReducers({
    users: usersReducer,
    bugs: bugsReducer,
    projects: projectsReducer
})
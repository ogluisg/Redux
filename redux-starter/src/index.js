import configureStore from './store/configureStore';
import { bugAdded, bugResolved, getBugsByUser, bugAssignToUser } from './store/bugs';
import { projectAdded } from './store/projects';
import { userAdded } from './store/users'

const store = configureStore();

store.dispatch({
    type: 'error',
    payload: { message: 'An error occured.'}
})

// store.subscribe(() => {
//     console.log('Store updated')
// }) 

//store.dispatch(userAdded({name:'User 1'}))
// store.dispatch(userAdded({name:'User 2'}))
// store.dispatch(projectAdded({name: 'Project 1'}))
// store.dispatch(bugAdded({description: 'Bug 1'}))
// store.dispatch(bugAdded({description: 'Bug 2'}))
// store.dispatch(bugAdded({description: 'Bug 3'}))
// store.dispatch(bugResolved({id: 1}))
// store.dispatch(bugAssignToUser({bugId: 1, userId: 1}))

// const bugs = getBugsByUser(2)(store.getState())
// console.log(bugs)

// console.log(store.getState())
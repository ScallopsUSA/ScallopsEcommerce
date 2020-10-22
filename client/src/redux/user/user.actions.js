import { userActionTypes } from './user.actionTypes';

export const setCurrentUser = user => ({
    type: userActionTypes.SET_CURRENT_USER,
    payload: user
})

export const logoutUser = () => ({
    type: userActionTypes.LOGOUT
})
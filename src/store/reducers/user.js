const initialState = {}
export function user(state = initialState, action) {
    switch (action.type) {
        case 'GET_USER_RINFO':
            return state
        default:
            return state
    }
}

export const getProfile = (state) => {
    if (state.user) {
        return state.user.profile
    } else {
        return null
    }
}
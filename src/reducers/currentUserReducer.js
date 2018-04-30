export default function usersReducer(state = {}, action) {
    const { type, payload } = action;
    switch (type) {
        case 'CURRENT_USER.SET': {
            return payload;
        }
        default: return state;
    }
}

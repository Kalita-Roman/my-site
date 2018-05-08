function updateUser(list, predicate, update) {
    const userIndex = list.findIndex(predicate);
    const oldUser = list[userIndex];
    const newUser = update(oldUser);
    list.splice(userIndex, 1, newUser);
    return [...list];
}

export default function usersReducer(state = [], action) {
    const { type, payload } = action;
    switch (type) {
        case 'USERS.SET': {
            return payload.map((user) => ({ id: user.id, data: user }));
        }
        case 'USER.SET': {
            return [...state, { id: payload.uid, vkData: payload }];
        }
        case 'USER.SET.DATA': {
            const { id } = payload;
            return updateUser(
                state,
                (user) => user.id === id,
                (user) => ({ ...user, data: payload, pending: false }),
            );
        }
        case 'USER.SET.VKDATA': {
            return updateUser(
                state,
                (user) => user.id === payload.uid.toString(),
                (user) => ({ ...user, vkData: payload, pending: false }),
            );
        }
        case 'USER.SET.PENDING': {
            const { id } = payload;
            return updateUser(
                state,
                (user) => user.id === id,
                (user) => ({ ...user, pending: true }),
            );
        }
        default: return state;
    }
}

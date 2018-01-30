export default function usersReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case 'USERS.SET': {
      return payload;
    }
    case 'USER.SET': {
      const userIndex = state.findIndex(user => user.id == payload.uid);
      const user = state[userIndex]
      state.splice(userIndex, 1, { ...user, ...payload });
      return [...state];
    }
    default: return state;
  }
};
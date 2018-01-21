export default function initializeReducer(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case 'INIT': {
      return { 
        ...state,
        session: payload
      }
    }
    case 'PERMISSIONS': {
      return {
        ...state,
        permissions: payload
      }
    }
    default: return state;
  }
};
export default function gamesReduser(state = {}, action) {
    const { type, payload } = action;
    switch (type) {
        case 'GAMES.SET': {
            return { all: payload, ...state };
        }
        case 'CURRENT_GAMES.SET': {
            return { current: payload, ...state };
        }
        case 'GAME.SET': {
            return { selected: payload, ...state };
        }
        default: return state;
    }
}

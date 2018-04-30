export default function gamesReduser(state = [], action) {
    const { type, payload } = action;
    switch (type) {
        case 'GAMES.SET': {
            return [...payload];
        }
        default: return state;
    }
}

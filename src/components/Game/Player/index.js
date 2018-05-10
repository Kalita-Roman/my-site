import { connect } from 'react-redux';

import Player from './Player.jsx';

import { fetchUserById } from '../../../actions/users';

const mapStateToProps = (store, { vote: { player: id } }) => ({
    user: store.users.find(x => x.id.toString() === id),
});

const mapActionsToProps = {
    fetchUserById,
};

export default connect(mapStateToProps, mapActionsToProps)(Player);

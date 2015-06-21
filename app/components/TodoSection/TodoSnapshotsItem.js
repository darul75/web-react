// LIBRARY
import React from 'react';

// FLUX
import SnapshotActions from '../../actions/SnapshotActions';

let { PropTypes } = React;

if (process.env.BROWSER) {
  require('./_TodoItem.scss');
}

export default class TodoSnapshotsItem extends React.Component {
  constructor(props) {
    super(props);
    this.propsTypes = {
      snapshot: PropTypes.object.isRequired
    };
  }

  render() {
    var todo = this.props.snapshot;

    return (
      <li key={todo.id}>
        <label><a href='#' onClick={this._bootstrapSnapshot.bind(this)}>{todo.id}</a></label>
        <button className='destroy' onClick={this._onDestroyClick.bind(this)}>&#10006;</button>
      </li>
    );
  }

  _bootstrapSnapshot() {
    SnapshotActions.bootstrapSnapshot(this.props.snapshot.id);
  }

  _onDestroyClick() {
    SnapshotActions.destroySnapshot(this.props.snapshot.id);
  }
}

TodoSnapshotsItem.prototype.displayName = 'TodoSnapshotsItem';

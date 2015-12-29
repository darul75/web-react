// LIBRARY
import React from 'react';

// FLUX
import SnapshotActions from '../../actions/SnapshotActions';

// COMPONENT
import UxButton from '../Ux/UxButton';
import TodoSnapshotsItem from './TodoSnapshotsItem';

let { PropTypes } = React;

export default class TodoSnapshots extends React.Component {
  constructor(props) {
    super(props);

    // https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#autobinding
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    SnapshotActions.takeSnapshot();
  }

  render() {
    const {snapshots: allSnaps, todoLength: hasTodos } = this.props,
      snapshots = [];

    for (const key in allSnaps) {
      snapshots.push(<TodoSnapshotsItem key={key} snapshot={allSnaps[key]} />);
    }

    return (
      <div className='todo-snapshot'>
        <p>{'Then take a snapshot or load it'}</p>
        <UxButton label='TAKE SNAPSHOT' onClick={this.handleOnClick} show={!hasTodos} />
        <ul id='todo-snapshot-list'>{snapshots}</ul>
      </div>
    );
  }
}

TodoSnapshots.propTypes = {
  snapshots: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string
  })),
  todoLength: PropTypes.number.isRequired,
};

TodoSnapshots.prototype.displayName = 'TodoSnapshots';

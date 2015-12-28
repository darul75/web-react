// LIBRARY
import React from 'react';
import cx from 'classnames';

// FLUX
import SnapshotActions from '../../actions/SnapshotActions';

// COMPONENT
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
      const snap = (
        <TodoSnapshotsItem
            key={key}
            snapshot={allSnaps[key]}
        />
      );
      snapshots.push(snap);
    }

    return (
      <div className='todo-snapshot'>
        <p>{'Then take a snapshot or load it'}</p>
        <button
            className={cx({'hidden': !hasTodos})}
            onClick={this.handleOnClick}
        >
          {'TAKE SNAPSHOT'}
        </button>
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

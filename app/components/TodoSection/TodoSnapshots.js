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
    this.propsTypes = {
      todoLength: PropTypes.number.isRequired
    };
  }

  render() {
    let allSnaps = this.props.snapshots,
        hasTodos = this.props.todoLength,
        snapshots = [];

    for (var key in allSnaps) {
      snapshots.push(<TodoSnapshotsItem key={key} snapshot={allSnaps[key]} />);
    }

    return (
      <div className='todo-snapshot'>
        <p>Then take a snapshot or load it</p>
        <button className={cx({'hidden': !hasTodos})} onClick={this._onClick.bind(this)} >TAKE SNAPSHOT</button>
        <ul id='todo-snapshot-list'>{snapshots}</ul>
      </div>
    );
  }

  _onClick() {
    SnapshotActions.takeSnapshot();
  }
}

TodoSnapshots.prototype.displayName = 'TodoSnapshots';

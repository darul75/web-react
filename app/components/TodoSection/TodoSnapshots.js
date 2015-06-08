import React from 'react';

import AppActions from '../../actions/AppActions';
import TodoSnapshotsItem from './TodoSnapshotsItem';

export default class TodoSnapshots extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      snapshots: this.props.snapshots
    };
  }

  render() {
    let allSnaps = this.state.snapshots,
        snapshots = [];

    for (var key in allSnaps) {
      snapshots.push(<TodoSnapshotsItem key={key} snapshot={allSnaps[key]} />);
    }

    return (
      <div className='todo-snapshot'>
        <button onClick={this._onClick.bind(this)}>TAKE SNAPSHOT</button>
        <ul id='todo-snapshot-list'>{snapshots}</ul>
      </div>
    );
  }

  _onClick() {
    AppActions.takeSnapshot();
  }
}

TodoSnapshots.prototype.displayName = 'TodoSnapshots';

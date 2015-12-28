// LIBRARY
import React from 'react';

// FLUX
import SnapshotActions from '../../actions/SnapshotActions';

const { PropTypes } = React;

if (process.env.BROWSER) {
  require('./_TodoItem.scss');
}

export default class TodoSnapshotsItem extends React.Component {
  constructor(props) {
    super(props);

    // https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#autobinding
    this.handleBootstrapSnapshot = this.handleBootstrapSnapshot.bind(this);
    this.handleOnClickRemove = this.handleOnClickRemove.bind(this);
  }

  handleBootstrapSnapshot() {
    SnapshotActions.bootstrapSnapshot(this.props.snapshot.id);
  }

  handleOnClickRemove() {
    SnapshotActions.removeSnapshot(this.props.snapshot.id);
  }

  render() {
    const {snapshot} = this.props;

    return (
      <li key={snapshot.id}>
        <div className='inline'>
          <label>
            <a
                href='#'
                onClick={this.handleBootstrapSnapshot}
            >
              {snapshot.id}
            </a>
          </label>
          <button
              className='destroy'
              onClick={this.handleOnClickRemove}
          >
            {'X'}
          </button>
        </div>
      </li>
    );
  }
}

TodoSnapshotsItem.propTypes = {
  snapshot: PropTypes.shape({
    id: PropTypes.string
  })
};

TodoSnapshotsItem.prototype.displayName = 'TodoSnapshotsItem';

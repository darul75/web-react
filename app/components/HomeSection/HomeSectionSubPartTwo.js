// LIBRARY
import React from 'react';
import marked from 'marked';

// FLUX
import AppActions from '../../actions/AppActions';

let { PropTypes } = React;

export default class HomeSectionSubPartTwo extends React.Component {
  constructor() {
    super();
  }

  _onClick() {
    AppActions.fetch();
  }

  render() {
    let contentMarkup = 'dispatching zone 2';
    if (this.props.apiData) {
      contentMarkup = marked('```json\n' + JSON.stringify(this.props.apiData, null, 2) + '```', {breaks: true});
    }

    /*eslint-disable react/no-danger*/
    return (
      <div className='home-section-sub-part-two'
          dangerouslySetInnerHTML={{__html: contentMarkup}}
      >
      </div>
    );
    /*eslint-enable react/no-danger*/
  }
}

HomeSectionSubPartTwo.propTypes = {
  apiData:
    PropTypes.shape({
      id: PropTypes.number
    })
};

HomeSectionSubPartTwo.prototype.displayName = 'HomeSectionSubPartTwo';

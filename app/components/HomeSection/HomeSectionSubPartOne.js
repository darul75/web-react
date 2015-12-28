// LIBRARY
import React from 'react';
import marked from 'marked';

// FLUX
import AppActions from '../../actions/AppActions';

const { PropTypes } = React;

export default class HomeSectionSubPartOne extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let contentMarkup = 'dispatching zone 1';
    if (this.props.apiData) {
      contentMarkup = marked('```json\n' + JSON.stringify(this.props.apiData, null, 2) + '```', {breaks: true});
    }

    /*eslint-disable react/no-danger*/
    return (
      <div className='home-section-sub-part-one'
          dangerouslySetInnerHTML={{__html: contentMarkup}}
      >
      </div>
    );
    /*eslint-enable react/no-danger*/
  }
}

HomeSectionSubPartOne.propTypes = {
  apiData:
    PropTypes.shape({
      id: PropTypes.number
    })
};

HomeSectionSubPartOne.prototype.displayName = 'HomeSectionSubPartOne';

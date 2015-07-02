// LIBRARY
import React from 'react';

if (process.env.BROWSER) {
  require('./_Footer.scss');
}

export default class Footer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='footer'>
        <div>
          <iframe src='https://ghbtns.com/github-btn.html?user=darul75&repo=web-react&type=star&count=true&v=2' frameBorder='0' scrolling='0' width='170px' height='20px'></iframe>
          <iframe src='https://ghbtns.com/github-btn.html?user=darul75&repo=web-react&type=fork&count=true&v=2' frameBorder='0' scrolling='0' width='170px' height='20px'></iframe>
        </div>
      </div>
    );
  }
}

Footer.prototype.displayName = 'Footer';

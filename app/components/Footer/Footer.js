// LIBRARY
import React from 'react';

// css
if (process.env.BROWSER) {
  require('./_Footer.scss');
}

// stateless functional component
const Footer = () => (
 <div className='footer'>
  <div>
    <iframe
        frameBorder='0'
        height='20px'
        scrolling='0'
        src='https://ghbtns.com/github-btn.html?user=darul75&repo=web-react&type=star&count=true&v=2'
        width='170px'
    >
    </iframe>
    <iframe
        frameBorder='0'
        height='20px'
        scrolling='0'
        src='https://ghbtns.com/github-btn.html?user=darul75&repo=web-react&type=fork&count=true&v=2'
        width='170px'
    >
    </iframe>
  </div>
</div>
);

Footer.prototype.displayName = 'Footer';

export default Footer;

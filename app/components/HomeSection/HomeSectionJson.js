// LIBRARY
import React from 'react';
import marked from 'marked';

/*eslint-disable react/no-danger*/

// stateless functional component
const HomeSectionJsonZone = ({apiData, content}) => {
  if (apiData) {
    content = marked('```json\n' + JSON.stringify(apiData, null, 2) + '```', {breaks: true});
  }

  return (
    <div className='home-section-sub-part-one'
        dangerouslySetInnerHTML={{__html: content}}
    >
    </div>
  );
}
/*eslint-enable react/no-danger*/

HomeSectionJsonZone.prototype.displayName = 'HomeSectionJsonZone';

export default HomeSectionJsonZone;

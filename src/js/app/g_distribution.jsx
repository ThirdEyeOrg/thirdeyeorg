import React from 'react';
import Headline from 'grommet/components/Headline'
import Distribution from 'grommet/components/Distribution'
import GHeadline from './g_headline.jsx'

export default class GDistribution extends React.Component {
  render() {
    return(
      <div>
        <GHeadline text='Percent of Adults Males Incarcerated' />
        <Distribution series={[
          {"label": "Black", "value": 4.7, "colorIndex": "graph-1"},
          {"label": "Hispanic", "value": 1.8, "colorIndex": "accent-2"},
          {"label": "White", "value": 0.7, "colorIndex": "unset"},
        ]} a11yTitleId="distribution-title-1" a11yDescId="distribution-desc-1" />
    </div>
    );
  }
}

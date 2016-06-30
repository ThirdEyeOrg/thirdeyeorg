import React from 'react';
import Headline from 'grommet/components/Headline'
import Distribution from 'grommet/components/Distribution'
import GHeadline from './g_headline.jsx'

export default class GDistribution extends React.Component {
  render() {
    return(
      <div>
        <GHeadline text='Distribution of Incarcentated by Race' />
        <Distribution series={[
          {"label": "First", "value": 40, "colorIndex": "graph-1"},
          {"label": "Second", "value": 30, "colorIndex": "accent-2"},
          {"label": "Third", "value": 20, "colorIndex": "unset"},
          {"label": "Fourth", "value": 10, "colorIndex": "graph-1"}
        ]} a11yTitleId="distribution-title-1" a11yDescId="distribution-desc-1" />
    </div>
    );
  }
}

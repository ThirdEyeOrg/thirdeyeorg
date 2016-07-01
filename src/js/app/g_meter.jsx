import React from 'react';
import Meter from 'grommet/components/Meter';
import GHeadline from './g_headline.jsx'

export default class GMeter extends React.Component {
  render() {
    return(
      <div>
        <div>
          <GHeadline text='Current Communication Mode Utilization'/>
        </div>
        <div style={{margin: '0 auto', width: '400px'}}>
          <Meter type="arc" legend={true} series={[
            {"label": "SMS", "value": 50, "colorIndex": "graph-1"},
            {"label": "Phone", "value": 200, "colorIndex": "graph-2"},
            {"label": "Internet", "value": 100, "colorIndex": "graph-3"},
            {"label": "Thrid Party", "value": 300, "colorIndex": "graph-4"}
          ]} a11yTitleId="meter-title-14" a11yDescId="meter-desc-14" />
      </div>
    </div>
    );
  }
}

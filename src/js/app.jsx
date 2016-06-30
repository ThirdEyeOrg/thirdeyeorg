import React from 'react';

import GHeader from './app/g_header.jsx'
import GChart from './app/g_chart.jsx'
import GDistribution from './app/g_distribution.jsx'
import GWorldMap from './app/g_worldmap.jsx'

export default class App extends React.Component {
  render() {
    return(
      <div>
        <GHeader />
        <div className="container" style={{'marginTop': '105px'}}>
          <GChart />
        </div>
        <div className="container">
          <GDistribution />
        </div>
        <div className="container">
          <GWorldMap />
        </div>
      </div>
    );
  }
}

import React from 'react';

import GHeader from './app/g_header.jsx'
import GChart from './app/g_chart.jsx'
import GDistribution from './app/g_distribution.jsx'
import GWorldMap from './app/g_worldmap.jsx'
import Intro from './app/intro.jsx'
import Slider from 'react-viewport-slider'
import GMeter from './app/g_meter.jsx'

export default class App extends React.Component {
  render() {
    return(
      <div>
        <Slider>
          <div style={{margin: '0 auto', padding: '120px'}}>
            <Intro />
          </div>
          <div style={{margin: '0 auto', padding: '120px'}}>
            <GDistribution />
          </div>
          <div style={{margin: '0 auto', padding: '120px'}}>
            <GMeter />
          </div>
          <div style={{margin: '0 auto', padding: '120px'}} align='center'>
            <GWorldMap />
          </div>
        </Slider>
      </div>
    );
  }
}

import React from 'react';

import GHeader from './app/g_header.jsx'
import GChart from './app/g_chart.jsx'
import GDistribution from './app/g_distribution.jsx'
import GWorldMap from './app/g_worldmap.jsx'
import Intro from './app/intro.jsx'
import Slider from 'react-viewport-slider'
import GMeter from './app/g_meter.jsx'
import HomeSection from './app/home_section.jsx'

export default class App extends React.Component {
  render() {
    return(
      <div>
        <Slider>
          <HomeSection>
            <Intro />
          </HomeSection>
          <HomeSection>
            <GDistribution />
          </HomeSection>
          <HomeSection>
            <GMeter />
          </HomeSection>
          <HomeSection>
            <GWorldMap />
          </HomeSection>
        </Slider>
      </div>
    );
  }
}

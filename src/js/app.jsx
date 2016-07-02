import React from 'react';

import GHeader from './app/g_header.jsx'
import GChart from './app/g_chart.jsx'
import GDistribution from './app/g_distribution.jsx'
import GWorldMap from './app/g_worldmap.jsx'
import Intro from './app/intro.jsx'
import Slider from 'react-viewport-slider'
import GMeter from './app/g_meter.jsx'
import HomeSection from './app/home_section.jsx'
import GHeadline from './app/g_headline.jsx'
import GIntro from './app/g_intro.jsx'
import TELogo from './app/te_logo.jsx'

export default class App extends React.Component {
  render() {
    return(
      <div>
        <TELogo />
        <GIntro />
        {/* <Slider> */}
        {/*   <HomeSection> */}
        {/*     <GHeadline text='Third Eye' /> */}
        {/*     <p>Decentralized Autonomous Emergency Response System</p> */}
        {/*   </HomeSection> */}
        {/*   <HomeSection> */}
        {/*     <GDistribution /> */}
        {/*   </HomeSection> */}
        {/*   <HomeSection> */}
        {/*     <GMeter /> */}
        {/*   </HomeSection> */}
        {/*   <HomeSection> */}
        {/*     <GWorldMap /> */}
        {/*   </HomeSection> */}
        {/* </Slider> */}
      </div>
    );
  }
}

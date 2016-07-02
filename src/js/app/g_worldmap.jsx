import React from 'react';
import WorldMap from 'grommet/components/Worldmap'
import GHeadline from './g_headline.jsx'

export default class GWorldMap extends React.Component {
  render() {
    return(
      <div>
        <GHeadline text='Effective Emergency Response System Coverage' />
        <WorldMap series={[
          {
            "continent": "NorthAmerica",
            "label": "North America",
            "value": 40,
            "colorIndex": "graph-1"
          },
          {
            "continent": "SouthAmerica",
            "label": "South America",
            "value": 30,
            "colorIndex": "unset"
          },
          {
            "continent": "Europe",
            "label": "Europe",
            "value": 20,
            "colorIndex": "graph-2"
          },
          {
            "continent": "Africa",
            "label": "Africa",
            "value": 2,
            "colorIndex": "unset"
          },
          {
            "continent": "Asia",
            "label": "Asia",
            "value": 65,
            "colorIndex": "unset"
          },
          {
            "continent": "Australia",
            "label": "Australia",
            "value": 10,
            "colorIndex": "graph-4"
          }
        ]} legend={true} units="B" />
    </div>
    );
  }
}

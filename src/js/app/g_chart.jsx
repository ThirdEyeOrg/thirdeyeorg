import React from 'react';
import Chart from 'grommet/components/Chart'
import GHeadline from './g_headline.jsx'

export default class GChart extends React.Component {
  render() {
    return(
      <div>
        <GHeadline text='911 Expenses vs Crime' />
        <Chart series={[
          {
            "label": "Crime",
            "values": [[8, 4], [7, 4], [6, 3], [5, 4], [4, 5], [3, 4], [2, 2], [1, 1]],
            "colorIndex": "graph-1"
          },
          {
            "label": "Cost",
            "values": [[8, 0], [7, 2], [6, 3], [5, 4], [4, 3], [3, 1], [2, 1], [1, 0]],
            "colorIndex": "graph-2"
          }
        ]} max={5} threshold={3} type="area" legend={{}} points={true} xAxis={{
          "placement": "bottom",
          "data": [
            {"label": "2002", "value": 4},
            {"label": "2003", "value": 5},
            {"label": "2004", "value": 6},
            {"label": "2005", "value": 7},
            {"label": "2006", "value": 8},
            {"label": "2006", "value": 9},
            {"label": "2007", "value": 10},
            {"label": "2008", "value": 11},
          ]
        }} units="% Growth" thresholds={[
          {"label": "OK", "value": 0, "colorIndex": "ok"},
          {"label": "Warning", "value": 3, "colorIndex": "warning"},
          {"label": "Error", "value": 4, "colorIndex": "error"}
        ]} a11yTitleId="complexAreaChartTitle" a11yDescId="complexAreaChartDesc" />
    </div>
    );
  }
}

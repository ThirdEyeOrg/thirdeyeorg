import React from 'react';
import GHeadline from './g_headline.jsx'

export default class Intro extends React.Component {
  render() {
    return(
      <div>
        <GHeadline text='Third Eye' />
        <p>Decentralized Autonomous Emergency Response System</p>
      </div>
    );
  }
}

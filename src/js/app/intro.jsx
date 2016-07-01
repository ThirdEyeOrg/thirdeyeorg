import React from 'react';

export default class Intro extends React.Component {
  render() {
    return(
      <div>
        <div className="jumbotron" style={{padding: '23px', textAlign: 'center'}}>
          <h1>Third Eye</h1>
          <p>Decentralized Autonomous Emergency Response System</p>
        </div>
      </div>
    );
  }
}

import React from 'react';

import NavigationBar from './app/navigation_bar.jsx'

export default class App extends React.Component {
  render() {
    return(
      <div className="container">
        <NavigationBar />
      </div>
    );
  }
}

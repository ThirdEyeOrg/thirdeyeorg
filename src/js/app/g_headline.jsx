import React from 'react';
import Headline from 'grommet/components/Headline'

export default class GHeadline extends React.Component {
  render() {
    return(
      <Headline>
        {this.props.text}
      </Headline>
    );
  }
}

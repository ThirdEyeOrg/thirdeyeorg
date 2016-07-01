import React from 'react';
import Header from 'grommet/components/Header'
import Anchor from 'grommet/components/Anchor'
import Menu from 'grommet/components/Menu'
import Title from 'grommet/components/Title'

export default class GHeader extends React.Component {
  render() {
    return(
      <div>
        <Header size="large" justify="between" colorIndex="neutral-1" pad={{"horizontal": "medium"}}>
          <Title >
            Third Eye
          </Title>
        </Header>
      </div>
    );
  }
}

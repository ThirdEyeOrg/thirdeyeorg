import React from 'react';
import Section from 'grommet/components/Section'

export default class HomeSection extends React.Component {
  render() {
    return(
      <Section {...this.props}
        appCentered={true} justify="center" align="center" full={true}
        textCentered={true} pad={{vertical: "large"}}>
        {this.props.children}
      </Section>
    );
  }
}

import React from 'react';
import Carousel from 'grommet/components/Carousel'
import Article from 'grommet/components/Article'
import Section from 'grommet/components/Section'
import Header from 'grommet/components/Header'

export default class GCarousel extends React.Component {
  url(index) {
    return(
      `http://qucentis.net/labs/linksy/images/621x621/${index}.jpg`
    );
  }

  render() {
    return(
      <div>
        <Carousel>
        </Carousel>
    </div>
    );
  }
}

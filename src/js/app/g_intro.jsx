import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import Article from 'grommet/components/Article';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Footer from 'grommet/components/Footer';
import Section from 'grommet/components/Section';
import Headline from 'grommet/components/Headline';
import Paragraph from 'grommet/components/Paragraph';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import GrommetLogo from 'grommet/components/icons/Grommet';
import SlackIcon from 'grommet/components/icons/base/SocialSlack';
import GithubIcon from 'grommet/components/icons/base/SocialGithub';
import TwitterIcon from 'grommet/components/icons/base/SocialTwitter';
import Hands from './img/Hands.jsx';
import NavAnchor from './NavAnchor.jsx';
import NavButton from './NavButton.jsx';
import ThemeMenu from './ThemeMenu.jsx';

class HomeSection extends Component {
  render () {
    return (
      <Section
        appCentered={true} justify="center" align="center"
        textCentered={true} pad={{vertical: "large"}} {...this.props}>
        {this.props.children}
      </Section>
    );
  }
};

export default class Home extends Component {
  constructor () {
    super();
    this._onScroll = this._onScroll.bind(this);
    this.state = { mobileOffset: 0 };
  }

  componentDidMount () {
    this._app = document.querySelector('.app');
    this._app.addEventListener('scroll', this._onScroll);
  }

  componentWillUnmount () {
    this._app.removeEventListener('scroll', this._onScroll);
  }

  _onScroll (event) {
    const elem = findDOMNode(this.refs.mobile);
    const rect = elem.getBoundingClientRect();
    if (rect.top < 0) {
      this.setState({ mobileOffset: Math.abs(rect.top) / 12 });
    }
  }

  render () {
    const mobileStyle = {
      backgroundPosition: `50% ${50 - this.state.mobileOffset}%`
    };

    return (
      <Article className="home">
        <HomeSection primary={true} pad="none">
          <Header fixed={false} appCentered={true} justify="center">
            <Menu direction="row" responsive={false} dropAlign={{left: 'left'}}>
              <NavAnchor path="/problem">Problem</NavAnchor>
              <NavAnchor path="/solution">Solution</NavAnchor>
              <NavAnchor path="/technology">Technology</NavAnchor>
            </Menu>
          </Header>
          <Box pad={{vertical: 'large'}} direction="column" align="center"
            flex={false}>
            <img src='./logo-black.svg' width='100px' height='100px' />
            <Heading tag="h1" margin="medium">Third Eye</Heading>
            <Headline size="small" align="center">
              Decentralized, Autonomous Emergency Response System
            </Headline>
          </Box>
          <Footer appCentered={true} justify="center">
            <Menu inline={true} responsive={false} direction="row">
              <Anchor href="https://github.com/ThirdEyeOrg/" icon={<GithubIcon />}/>
            </Menu>
          </Footer>
        </HomeSection>

        <Footer primary={true} appCentered={true} direction="column"
          pad={{ vertical: 'medium' }}>
          <Box direction="row" justify="between" align="start"
            pad={{ between: 'medium' }}>
          </Box>
          <Box direction="row" justify="between">
            <span>
             By <a href='http://qucentis.com'>Qucentis</a>
            </span>
            <span>
              © 2016 Third Eye
            </span>
          </Box>
        </Footer>

      </Article>
    );
  }

};

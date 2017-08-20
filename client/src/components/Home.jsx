import React, {Component} from 'react';
import '../App.css';
import MenuPointing from './MenuPointing';
import MenuFixed from './MenuFixed';
import MenuSidebar from './MenuSidebar';
import Card from './Card';
import PlaceholderImage from "../images/placeholder_image.png";
import AugurImage from "../images/augurlabs.png";
import DeaddropImage from "../images/deaddrop.png";

import {Router, Route, Link} from 'react-router-dom';
import { Container, Header, Icon, Item, Grid, Image, Divider, Button, Label } from 'semantic-ui-react';




class Home extends Component {
    render() {
        return (
            <Container fluid id='main-container'>
              <div className='ui inverted vertical masthead center aligned segment'>
                    <div className="ui middle aligned stackable grid container">
                        <div className="row">
                            <div className="six wide column">
                                <Card/>
                            </div>
                            <div className="ten wide left floated column">
                                <h1 className='ui header inverted'>Fullstack Engineer</h1>
                                <h2>Experienced software development professional building out apps in Python and React. </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ui vertical stripe segment">
                    <div className="ui middle aligned stackable grid container">
                      <Grid>
                        <Grid.Row>
                          <Header as='h2' icon textAlign='center'>
                            <Icon name='lightning' circular />
                            <Header.Content>
                              Project Spotlight
                            </Header.Content>
                          </Header>
                        </Grid.Row>
                        <Grid.Row verticalAlign='middle'>
                          {/* <Grid.Column width={10} >
                            <h3 className="ui header">augur <Label color='orange' horizontal>WIP</Label></h3>
                            <p>augur provides a suite of Python machine learning APIs as REST microservices that can be fetched and interfaced through a React frontend.</p>
                            <Button as='a' href='https://github.com/rmbrntt/augur' target='_blank' animated='vertical'>
                              <Button.Content visible>Check It Out</Button.Content>
                              <Button.Content hidden>
                                <Icon name='github' />
                              </Button.Content>
                            </Button>
                          </Grid.Column>
                          <Grid.Column width={6} floated='right'>
                            <Image src={AugurImage} fluid bordered  label={{ color: 'orange', icon: 'road', corner:'right' }}/>
                          </Grid.Column> */}
                          <Grid.Column width={10} >
                            <h3 className="ui header">deaddrop <Label color='orange' horizontal>WIP</Label></h3>
                            <p>deaddrop provides a service for dropping messages at geo-locations. </p>
                            <Button as='a' href='https://github.com/rmbrntt/deaddrop' target='_blank' animated='vertical'>
                              <Button.Content visible>Check It Out</Button.Content>
                              <Button.Content hidden>
                                <Icon name='github' />
                              </Button.Content>
                            </Button>
                          </Grid.Column>
                          <Grid.Column width={6} floated='right'>
                            <Image src={DeaddropImage} fluid bordered  label={{ color: 'orange', icon: 'road', corner:'right' }}/>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </div>
                </div>
                {/* <div className="ui vertical stripe quote segment">
                    <div className="ui equal width stackable internally celled grid">
                        <div className="center aligned row">
                            <div className="column">
                                <h3>Twitter Feed 1</h3>
                                <p>#hashtag?</p>
                            </div>
                            <div className="column">
                                <h3>Twitter Feed 2</h3>
                                <p>
                                    #hashtag?
                                </p>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div className="ui vertical stripe segment">
                    <div className="ui text container">
                        <h3 className="ui header">Blog Feed 1</h3>
                        <p>Spicy jalapeno bacon ipsum dolor amet t-bone burgdoggen bacon, jerky salami kielbasa biltong meatloaf pancetta sirloin. Capicola filet mignon bresaola beef ribs swine, porchetta picanha pork shoulder.</p>
                        <a className="ui large button">Read More</a>
                        <div className="ui divider"></div>

                        <h3 className="ui header">Blog Feed 2</h3>
                        <p>Tenderloin pork sirloin cow picanha ham capicola bresaola fatback ham hock swine prosciutto tri-tip meatball ball tip. Corned beef tri-tip landjaeger ribeye, bacon salami cupim.</p>
                        <a className="ui large button">Read More</a>

                    </div>
                </div> */}

            </Container>

        );
    }
}

export default Home;

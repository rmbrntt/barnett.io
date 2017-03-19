import React, { Component } from 'react';
import Avatar from "../../images/profile.jpg";

class Card extends Component {
  render() {
    return (
      <img className="ui medium rounded bordered image" src={Avatar} alt='Avatar' />
    );
  }
}

export default Card;

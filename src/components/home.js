import React, { Component } from 'react';
import Header from './header'
import Card from './card'


class Home extends Component {
  render() {
    return (
      <div className="home">
      	{ Header() }
      	<Card />
      </div>
    );
  }
}


//Things we need to fix
// placeholder
// gray and green number labels
// clear and generate button space
// content label numbers


export default Home;
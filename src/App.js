import React, { Component } from 'react';
// import Particles from 'react-particles-js';
import Navigation from './components/Navigation';
import Logo from './components/Logo';
import Rank from './components/Rank'
import ImageLinkForm from './components/ImageLinkForm'
import './App.css';

// const particlesOptions = {
//   particles: {
//     line_linked: {
//       shadow: {
//         enable: true,
//         color: "#3CA9D1",
//         blur: 5
//       }
//     }
//   }
// }

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: ''
    }
  }

  onInputChange = (e) => {
    console.log(e)
  }

  render() {
    return (
      <div className="App">
        {/* <Particles 
          className='particles'
          params={particlesOptions} /> */}
        <div className='flex justify-between flex-reverse mt3'>
          <Navigation />
          <Logo />
        </div>
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} />
        {/* {
        <FaceRecognition />} */}
      </div>
    );
  }
}

export default App;

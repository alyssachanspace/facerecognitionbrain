import React, { Component } from 'react';
import Clarifai from 'clarifai';
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

const app = new Clarifai.App({
  apiKey: '2f90c84dd05f4d3593ea27aad998b488'
});

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: ''
    }
  }

  onInputChange = (e) => {
    console.log(e.target.value)
  }

  onButtonSubmit = () => {
    console.log('click')
    app.models
      .predict(
        "a403429f2ddf4b49b307e318f00e528b",
        "https://samples.clarifai.com/face-det.jpg")
      .then(
        function(response) {
          console.log(response)
        },
        function(err) {
          console.log(err)
        }
      );
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
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        {/* {
        <FaceRecognition />} */}
      </div>
    );
  }
}

export default App;

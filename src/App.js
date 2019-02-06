import React, { Component } from 'react';
import Clarifai from 'clarifai';
// import Particles from 'react-particles-js';
import Navigation from './components/Navigation';
import Logo from './components/Logo';
import Rank from './components/Rank'
import ImageLinkForm from './components/ImageLinkForm'
import FaceRecognition from './components/FaceRecognition'
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
      input: '',
      imageUrl: ''
    }
  }

  onInputChange = (e) => {
    this.setState({ input: e.target.value })
  }

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input })
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)
      .then(
        function(response) {
          console.log(response.outputs[0].data.regions[0].region_info.bounding_box)
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
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;

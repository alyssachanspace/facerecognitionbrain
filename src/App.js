import React, { Component } from 'react';
import Clarifai from 'clarifai';
// import Particles from 'react-particles-js';
import Navigation from './components/Navigation';
import Signin from './components/Signin'
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
      imageUrl: '',
      box: {},
      route: 'signin'
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById('inputImage')
    const width = Number(image.width)
    const height = Number(image.height)
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    console.log(box)
    this.setState({box: box})
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
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err))
  }

  onRouteChange = (route) => {
    this.setState({ route: route })
  }

  render() {
    return (
      <div className="App">
        {/* <Particles 
          className='particles'
          params={particlesOptions} /> */}
        <div className='flex justify-between flex-reverse mt3'>
          <Navigation onRouteChange={this.onRouteChange} />
          <Logo />
        </div>
        { this.state.route === 'signin'
          ? <Signin onRouteChange={this.onRouteChange} />
          : <div>
              <Rank />
              <ImageLinkForm
                onInputChange={this.onInputChange}
                onButtonSubmit={this.onButtonSubmit}
              />
              <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
            </div>
        }
      </div>
    );
  }
}

export default App;

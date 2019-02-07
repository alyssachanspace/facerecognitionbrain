import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className='flex justify-center ma w-90 center'>
      <div className='flex justify-center items-start mt2 mb4 absolute'>
        <img id='inputImage' src={imageUrl} alt='' className='mw-100 h-auto' style={{ width: '500px' }} />
        <div className='bounding-box' style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>
      </div>
    </div>
  )
}

export default FaceRecognition
import React from 'react';

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className='flex justify-center ma'>
      <div className='flex justify-center items-start mt2 mb4'>
        <img src={imageUrl} alt='' className='mw-100 h-auto' style={{ width: '500px' }} />
      </div>
    </div>
  )
}

export default FaceRecognition
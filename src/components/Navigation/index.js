import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
  return (
    <nav className='flex justify-end'>
        {isSignedIn ? <p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'>Sign Out</p> : (
          <p className='f3 link dim black pa3 pointer'>
            <span onClick={() => onRouteChange('signin')} className='underline'>Sign In</span> / <span onClick={() => onRouteChange('register')} className='underline'>Register</span>
          </p>
        )}
      
    </nav>
  )
}

export default Navigation
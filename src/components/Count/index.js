import React from 'react'

const Count = ({ name, entries }) => {
  return (
    <div>
      <div className='white f3 pa3'>
        {`${name}, your current entry count is...`}
      </div>
      <div className='white f1'>
        {entries}
      </div>
    </div>
  )
}

export default Count
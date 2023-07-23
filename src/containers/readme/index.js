import React from 'react'


const Readme = () => {
  const README_PATH = 'assets/README.md';

  return (
    <div className='readme'>
      <iframe src={README_PATH} />
    </div>
  )
}


export default Readme
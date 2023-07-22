import React from 'react'


const Readme = () => {
  const README_URL = `${process.env.PUBLIC_URL || ''}/assets/README.md`;

  return (
    <div className='readme'>
      <iframe src={README_URL} />
    </div>
  )
}


export default Readme
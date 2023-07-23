import React from 'react'
import readmeData from './data'
import {DocSection} from '../../components/'


const Readme = () => {
  const sections = readmeData.sections;
  const sectionsView = sections.map((section, index) => {
    return <DocSection {...section} key={index}></DocSection>
  });

  return (
    <div className='readme'>
      <h2>{readmeData.title}</h2>
      {sectionsView}
    </div>
  )
}


export default Readme
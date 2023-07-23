import React from 'react'
import othersData from './data'
import {DocSection} from '../../components/'


const Others = () => {
  const sections = othersData.sections;
  const sectionsView = sections.map((section, index) => {
    return <DocSection {...section} key={index}></DocSection>
  });

  return (
    <div className='readme'>
      <h2>{othersData.title}</h2>
      {sectionsView}
    </div>
  )
}


export default Others
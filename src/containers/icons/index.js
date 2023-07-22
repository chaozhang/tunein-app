import React from 'react'
import { Icon } from '../../components/'


const Icons = () => {
    return (
        <div>
            <p>Page -> icons</p>
            <Icon id='home' assetPath={process.env.PUBLIC_URL} />
        </div>
    )
}


export default Icons
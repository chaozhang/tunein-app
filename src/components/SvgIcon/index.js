import React from 'react'
import PropTypes from 'prop-types'


const Icon = (props) => {
    const htmlString = {
        __html: `<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="${props.assetPath || ''}/assets/sprite.svg#${props.id}"></use>`
    };

    return (
        <svg dangerouslySetInnerHTML={htmlString}/>
    )
}


Icon.propTypes = {
    id: PropTypes.string.isRequired,
    assetPath: PropTypes.string
}


export default Icon

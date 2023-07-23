import React from 'react'
import PropTypes from 'prop-types'


const DocSection = (props) => {
    const {title, items} = props;
    const itemsView = items.map((item, index) => {
    	return <li key={index}> - {item}</li>
    });

    return <div className="doc-section">
		<h4># {title}</h4>
		<ul>{itemsView}</ul>
    </div>;
}

DocSection.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired
}

 
export default DocSection

import React from 'react'
import PropTypes from 'prop-types'


const StationsGrid = (props) => {
    const {stations, selectedId, onSelect} = props;

    const grids = stations.map(({id, imgUrl, name}, index) => {
    	let className = 'grid';

    	if(id === selectedId) className += ' selected';

    	return <div
    		className={className}
    		key={index}
    		onClick={() => {
    			if(id !== selectedId) {
    				onSelect(id);
    			}
    		}}
    	>
    		<img src={imgUrl} alt='' />
    		<div className='title'>{name}</div>
    	</div>;
    });

    return <div className="stations-grid">
		{grids}
    </div>;
}

StationsGrid.propTypes = {
    stations: PropTypes.arrayOf(PropTypes.shape({
	    id: PropTypes.string.isRequired,
	    imgUrl: PropTypes.string.isRequired,
	    name: PropTypes.string.isRequired
    })).isRequired,
    selectedId: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
}

 
export default StationsGrid

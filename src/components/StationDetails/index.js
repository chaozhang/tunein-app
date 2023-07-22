import React from 'react'
import PropTypes from 'prop-types'


const StationDetails = (props) => {
    const {imgUrl, name, description, popularity, reliability, streamUrl, tags, id} = props;

    const tagsView = tags.map((tag, index) => {
    	return <div className='pill' key={index}>{tag}</div>;
    });

    return <div className="selected-station">
		<div className="left">
			<img src={imgUrl} alt='' />
		</div>
		<div className="right">
			<section className="title">{name}</section>
			<section className="desc">{description}</section>
			<section className="stats">
				<div>Popularity: {popularity}</div>
				<div>Reliability: {reliability}</div>
			</section>
			<section className='tags'>{tagsView}</section>
			<section className="stream">
				<audio controls key={id} autoPlay={true}>
				  <source src={streamUrl} type="audio/MP3"/>
				</audio>
			</section>
		</div>
    </div>;
}


StationDetails.propTypes = {
    id: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    popularity: PropTypes.number.isRequired,
    reliability: PropTypes.number.isRequired,
    streamUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired
}

 
export default StationDetails

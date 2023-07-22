import React from 'react'
import PropTypes from 'prop-types'


const Footer = (props) => {
    const {name, user, url} = props.repo;

    const gitBtns = props.gitBtns.map((item, index) => {
        const src = `https://ghbtns.com/github-btn.html?user=${user}&repo=${name}&type=${item.name}&count=true&v=2`;

        return <iframe title={index} key={index} src={src} frameBorder="0" scrolling="0" width={item.size} height="20px"></iframe>;
    })

    return <footer>
        <div className="social">{gitBtns}</div>
        <p>Copyright &copy; {props.year}, All rights reserved.</p>
        <p>Created and maintained by <a href={url} target="_blank">{props.name}</a> ({props.title}).</p>
    </footer>
}


Footer.propTypes = {
    year: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    repo: PropTypes.shape({
        name: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    }),
    gitBtns: PropTypes.arrayOf(PropTypes.shape({
        size: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    })).isRequired
}

 
export default Footer

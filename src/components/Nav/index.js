import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
 

const Nav = (props) => {
    const navItems = props.navItems.map((item, index) =>
        <li key={index}>
            <NavLink exact to={item.url} activeClassName="active">{item.name}</NavLink>
        </li>
    )

    return (
        <nav>
            <ul>
                {navItems}
            </ul>
        </nav>
    )
}


Nav.propTypes = {
    navItems: PropTypes.arrayOf(PropTypes.shape({
        url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    })).isRequired
}


export default Nav
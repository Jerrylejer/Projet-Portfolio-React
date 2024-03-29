import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './navburger.scss';

class NavBurger extends Component {
    constructor(props) {
        super(props);
        this.openIcon = React.createRef();
        console.log(this.icon);
        this.modal = React.createRef();
        console.log(this.modal);
    }

    openNav = () => {
        this.modal.current.classList.toggle('navbar-modal-open');
    };

    render() {
        return (
            <div className='navbar-mobile'>
                <FontAwesomeIcon
                    icon={faBars}
                    className='navbar-icon-burger'
                    ref={this.openIcon}
                    onClick={this.openNav}
                />
                <div className='navbar-modal' ref={this.modal}>
                    <nav className='navigation-nav-mobile'>
                        <NavLink
                            onClick={this.openNav}
                            className='navigation-nav-mobile-items-1'
                            to='/'
                        >
                            Jérôme Richard
                        </NavLink>
                        <NavLink
                            onClick={this.openNav}
                            className='navigation-nav-mobile-items-2'
                            to='/Competences'
                        >
                            Skills
                        </NavLink>
                        <NavLink
                            onClick={this.openNav}
                            className='navigation-nav-mobile-items-3'
                            to='/Creations'
                        >
                            Projets
                        </NavLink>
                        <NavLink
                            onClick={this.openNav}
                            className='navigation-nav-mobile-items-4'
                            to='/ViePro'
                        >
                            Mon CV
                        </NavLink>
                        <NavLink
                            onClick={this.openNav}
                            className='navigation-nav-mobile-items-5'
                            to='/Contacts'
                        >
                            Contacts
                        </NavLink>
                    </nav>
                </div>
            </div>
        );
    }
}

export default NavBurger;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import title from '../../styles/assets/title.png';
import whitetitle from '../../styles/assets/whitetitle.png';
import logo from '../../styles/assets/logo.svg';

class Menu extends Component {
    render() {
        const workClass = !this.props.active?this.props.main?'nav-link main-active position-relative':'nav-link sub-active position-relative': 'nav-link';
        const aboutClass = this.props.active?this.props.active==='about'?'nav-link sub-active position-relative':'nav-link':'nav-link';
        const resumeClass = this.props.active?this.props.active==='resume'?'nav-link sub-active position-relative':'nav-link':'nav-link';
        
        return (
            <div className='position-relative container'>
                <nav className="navbar navbar-expand-lg w-100">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu">
                    <i className="fas fa-bars"></i>
                    </button>
                    <span className="navbar-brand"><img className={this.props.main?'fw-big-title':'fw-small-logo'} src={this.props.main?this.props.active?title:whitetitle:logo} alt='Wei Fang, full stack designer'/></span>
                    <div className="collapse navbar-collapse text-right" id="menu">
                        <ul className='navbar-nav ml-auto'>
                            <li className='nav-item ml-5 font-nunito'><a className={workClass} href='/'>Work</a></li>
                            <li className='nav-item ml-5 font-nunito'><a className={aboutClass} href='/about'>About me</a></li>
                            <li className='nav-item ml-5 font-nunito'><a className={resumeClass} href='/resume'>Resume</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

Menu.propTypes = {
    main: PropTypes.bool.isRequired,
    active: PropTypes.string,
};

export default Menu;
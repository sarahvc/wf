import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TwoColImg extends Component {
    render() {

        const imgClassName = this.props.imgclass?('img-fluid ').concat(this.props.imgclass):'img-fluid';
        return (
            <div className='container mt-4'>
                {this.props.textLeft
                ?<div className='row'>
                    <div className='col-12 col-md-5'>
                        <h3 className='font-nunito'>{this.props.title}</h3>
                        <p>{this.props.text}</p>
                    </div>
                    <div className='col-12 col-md-7'>
                        <img className={imgClassName} src={this.props.src} alt=''/>
                    </div>
                </div>
                :<div className='row'>
                    <div className='col-12 col-md-7'>
                        <img className={imgClassName} src={this.props.src} alt=''/>
                    </div>
                    <div className='col-12 col-md-5'>
                        <h3 className='font-nunito'>{this.props.title}</h3>
                        <p>{this.props.text}</p>
                    </div>
                </div>
                } 
            </div>
        );
    }
}

TwoColImg.propTypes = {
    textLeft: PropTypes.bool,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    imgclass: PropTypes.string
};

export default TwoColImg;
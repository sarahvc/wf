import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TwoColImg extends Component {
    render() {
        return (
            <div className='container mt-5'>
                {this.props.textLeft
                ?<div className='row'>
                    <div className='col-12 col-md-4'>
                        <h3 className='font-nunito'>{this.props.title}</h3>
                        <p>{this.props.text}</p>
                    </div>
                    <div className='col-12 col-md-8'>
                        <img className='img-fluid' src={this.props.src} alt=''/>
                    </div>
                </div>
                :<div className='row'>
                    <div className='col-12 col-md-8'>
                        <img className='img-fluid' src={this.props.src} alt=''/>
                    </div>
                    <div className='col-12 col-md-4'>
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
    src: PropTypes.string.isRequired
};

export default TwoColImg;
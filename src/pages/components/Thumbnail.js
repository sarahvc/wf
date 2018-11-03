import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Thumbnail extends Component {
    render() {
        const divclass = this.props.bgcolor.concat(' rounded text-center position-absolute w-100 h-100');
        let url = '/projects/';
        url = url.concat(this.props.url);
        return (
            <div className='col-12 col-md-6 col-lg-4 mb-4'>
                <a className='fw-thumbnail-link' href={url} alt=''>
                    <div className='position-relative fw-thumbnail-wrapper fw-square mb-2'>
                        <div className={divclass}>
                            <span></span><img className='img-fluid' src={this.props.img} alt=''/>
                        </div>
                        <div className='fw-brief position-absolute mb-0 px-3'>
                            <p className='my-3'>{this.props.brief}</p>
                        </div>
                    </div>
                    <p className='text-center font-nunito'>{this.props.title}</p>
                </a>
            </div>
        );
    }
}

Thumbnail.propTypes = {
    bgcolor: PropTypes.string.isRequired,
    img: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    brief: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};

export default Thumbnail;
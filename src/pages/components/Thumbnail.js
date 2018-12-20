import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Thumbnail extends Component {
    render() {
        const briefclass = this.props.brieflast?this.props.briefcolor?this.props.briefcolor.concat(' fw-brief position-absolute mb-0 px-3 last-brief'):'fw-brief fw-brief-green position-absolute mb-0 px-3 last-brief':'fw-brief fw-brief-green position-absolute mb-0 px-3';
        const bgimg = this.props.noimg?'fw-thumbnail-bg bg-scrabble text-center position-absolute w-100 h-100':'fw-thumbnail-bg text-center position-absolute w-100 h-100';
        const url = '/projects/';
        return (
            <div className='fw-thumbnail-container'>
                <a className='fw-thumbnail-link' href={url.concat(this.props.url)} alt=''>
                    <div className='position-relative fw-thumbnail-wrapper fw-square'>
                        <div className={bgimg}>
                            <span></span>
                            { 
                                this.props.noimg
                                ?null
                                :<img className='img-fluid' src={this.props.img} alt=''/>
                            }
                        </div>
                        <div className={briefclass}>
                            <p className='my-3'>{this.props.brief}</p>
                        </div>
                        <p className='fw-thumbnail-title text-center font-nunito position-absolute'>{this.props.title}</p>
                    </div>
                </a>
            </div>
        );
    }
}

Thumbnail.propTypes = {
    briefcolor: PropTypes.string,
    brieflast: PropTypes.bool,
    img: PropTypes.string,
    title: PropTypes.string.isRequired,
    brief: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    noimg: PropTypes.bool
};

export default Thumbnail;
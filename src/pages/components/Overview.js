import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Overview extends Component {
    render() {
        return (
            <div>
                <div className='position-relative fw-overview-wrapper'>
                    <div className='position-absolute fw-bg h-100 w-100 d-flex align-items-center'>
                        <div className='container'>
                            <h1 className='font-yrsa text-white text-center'>{this.props.title}</h1>
                            <div className='mt-5'>
                                <q className='font-yrsa text-white text-center d-block'>{this.props.quote}</q>
                                <p className='font-yrsa text-white fw-quote-source text-center mt-3'>{this.props.source}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container mt-5'>
                    <h2 className='text-center font-nunito'>OVERVIEW</h2>
                    <div className='row mt-4'>
                        <div className='col-12 col-sm-6'>
                            <h3 className='font-nunito'>SUMMARY</h3>
                            <p>{this.props.summary}</p>
                        </div>
                        <div className='col-12 col-sm-6'>
                            <h3 className='font-nunito'>MY ROLE</h3>
                            <p>{this.props.myrole}</p>
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-12 col-sm-4'>
                            <h3 className='font-nunito'>PROJECT TYPE</h3>
                            <p>{this.props.type}</p>
                        </div>
                        <div className='col-12 col-sm-4'>
                            <h3 className='font-nunito'>DURATION</h3>
                            <p>{this.props.duration}</p>
                        </div>
                        <div className='col-12 col-sm-4'>
                            <h3 className='font-nunito'>TEAM MEMBERS</h3>
                            <p>{this.props.members}</p>
                        </div>   
                    </div>
                </div>
            </div>
        );
    }
}

Overview.propTypes = {
    summary: PropTypes.array.isRequired,
    myrole: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    members: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired
};

export default Overview;

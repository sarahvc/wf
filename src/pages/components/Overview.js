import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TwoColImg from './TwoColImg';

class Overview extends Component {
    render() {
        return (
            <div className='fw-overview-wrapper'>
                <div className='container mt-5'>
                    <h1 className='font-nunito text-center'>{this.props.title}</h1>
                    <div className='row'>
                        {
                            this.props.quote &&
                            <div className='col-12 col-md-6 offset-md-3 fw-quote position-relative'>
                                <p className='font-yrsa'>{this.props.quote}</p>
                                <p className='font-yrsa text-right mt-3'>{this.props.source}</p>
                            </div>
                        } 
                    </div>
                    <h2 className='text-center font-nunito mt-4'>OVERVIEW</h2>
                </div>
                {
                    this.props.summary
                    ?<TwoColImg title='SUMMARY' text={this.props.summary} src={this.props.topimg}/>
                    :<div className='container mt-5'>
                        <div className='row'>
                            <div className='col-12 col-md-6 offset-md-3'>
                                <img className='img-fluid' src={this.props.topimg} alt=''/>
                            </div>
                        </div>
                    </div>
                }
                {
                    this.props.myrole &&
                    <div className='row mt-4'>
                        <div className='col-12 col-sm-6 offset-md-3'>
                            <h3 className='font-nunito'>MY ROLE</h3>
                            <p>{this.props.myrole}</p>
                        </div>
                    </div>
                }
                <div className='container mt-5'>
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
    summary: PropTypes.array,
    topimg: PropTypes.string,
    myrole: PropTypes.array,
    type: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    members: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    source: PropTypes.string,
    quote: PropTypes.string
};

export default Overview;

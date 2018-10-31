import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Overview extends Component {
    render() {
        return (
            <div>
                <h2 className='text-center'>OVERVIEW</h2>
                <div className='row'>
                    <div className='col-12 col-sm-6'>
                        <h3>Summary</h3>
                        <p>{this.props.summary}</p>
                    </div>
                    <div className='col-12 col-sm-6'>
                        <h3>My role</h3>
                        <p>{this.props.role}</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-sm-4'>
                        <h3>Project type</h3>
                        <p>{this.props.type}</p>
                    </div>
                    <div className='col-12 col-sm-4'>
                        <h3>Duration</h3>
                        <p>{this.props.duration}</p>
                    </div>
                    <div className='col-12 col-sm-4'>
                        <h3>Team members</h3>
                        <p>{this.props.members}</p>
                    </div>   
                </div>
            </div>
        );
    }
}

Overview.propTypes = {
    summary: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    members: PropTypes.string.isRequired
};

export default Overview;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Takeaway extends Component {
    render() {
        return (
            <div className='col-12 col-md-4'>
                <h3 className='font-nunito'>{this.props.title}</h3>
                <p>{this.props.content}</p>
            </div>
        );
    }
}

Takeaway.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};

export default Takeaway;

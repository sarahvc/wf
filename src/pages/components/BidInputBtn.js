import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BidInputBtn extends Component {
    render() {
        return (
            <button type='button' onClick={this.props.inputShares}>
                <span className='d-inline-block px-4 py-1'>
                    <span className='artx-type-tw artx-gradient-text'>{this.props.label}</span>
                </span>
            </button>
        );
    }
}

BidInputBtn.propTypes = {
    inputShares: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
};

export default BidInputBtn;
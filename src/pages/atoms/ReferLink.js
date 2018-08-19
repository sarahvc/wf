import React from 'react';
import PropTypes from 'prop-types';

const ReferLink = ({link}) => {
    const baseUrl = 'http://decentralism.io/';
    return (
        <div>
            <input type='text' readonly className='form-control-plaintext' id='artxRL' value={`${baseUrl}${link}`}/>
            <button className="btn"><i className="far fa-copy"></i></button>
        </div>
    )
};

export default ReferLink;

ReferLink.propTypes = {
    link: PropTypes.string.isRequired
}
import React from 'react';
import PropTypes from 'prop-types';

const ReferLink = ({link}) => {
    const baseUrl = 'http://decentralism.io/';
    return (
        <div>
            <input type='text' readOnly className='form-control-plaintext artx-type-et text-white' id='artxRL' value={`${baseUrl}${link}`}/>
            <button className="btn"><i className="far fa-copy"></i></button>
        </div>
    )
};

export default ReferLink;

ReferLink.propTypes = {
    link: PropTypes.string.isRequired
}
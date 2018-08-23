import React from 'react';
import PropTypes from 'prop-types';

const ReferLink = ({link, account}) => {
    const baseUrl = 'http://decentralism.io/';
    const subClass = account? 'artx-refer-account' : 'artx-refer-popup';
    return (
        <div className={subClass}>
            <input type='text' readOnly 
            className={
                account
                ? 'text-white artx-type-tw border-0'
                : 'text-white artx-type-et'
            } 
            id='artxRL' value={`${baseUrl}${link}`}
            />
            {
                account
                ? <button className="btn"><i className="far fa-copy"></i></button>
                : <button className="artx-type-et artx-btn py-1 px-2 text-white mx-4">Copy</button>
            }
        </div>
    )
};

export default ReferLink;

ReferLink.propTypes = {
    link: PropTypes.string.isRequired
}
import React from 'react';
import PropTypes from 'prop-types';

const AccountTR = ({label, content}) => {
    return (
        <tr>
            <th>{label}</th>
            <td className='text-right'>{content}ETH</td>
        </tr>
    )
};

export default AccountTR;

AccountTR.propTypes = {
    label: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}
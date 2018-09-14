import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {CopyToClipboard} from 'react-copy-to-clipboard';

class ReferLink extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            value: 'http://decentralism.io/'+this.props.link,
            copied: false
        };
        this.copyRFLink = this.copyRFLink.bind(this);
    }

    copyRFLink() {
        this.setState({copied: true});
        setTimeout(
            function() {
                this.setState({copied: false});
            }
            .bind(this), 3000
        );
    }

    render () {
        const subClass = this.props.account === 'true' ? 'artx-refer-account' : 'artx-refer-popup';
        return (
            <div className={subClass}>
                { this.state.copied && <span className='position-absolute artx-dark-bg px-2 text-warning rounded'>Referrak link copied!</span>}
                <input type='text' readOnly 
                className={
                    this.props.account
                    ? 'text-white artx-type-et border-0 w-100'
                    : 'text-white artx-type-st w-100'
                } 
                id='artxRL' value={this.state.value}
                />
                <CopyToClipboard text={this.state.value} onCopy={this.copyRFLink}>
                {
                    this.props.account
                    ? <button type='button' className="artx-icon-btn text-white"><i className="far fa-copy artx-type-tw artx-gradient-text"></i></button>
                    : <button type='button' className="artx-type-st artx-btn py-1 px-2 text-white mx-4">Copy</button>
                    
                }
                </CopyToClipboard>
            </div>
        )
    } 
}

export default ReferLink;

ReferLink.propTypes = {
    link: PropTypes.string.isRequired,
    account:  PropTypes.bool
}
import React, { Component }  from 'react';

export default class Middle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          //api
          maxAppraisal: '43472',
          avgAppraisal: '23472',
          followingAppraisal: ['34059.3423', '34059.3423']
        };
    };
    render() {
        return (
            <div>
                <span id='artxMA'>Max appraisal: </span><span className='pr-4' aria-labelledby='artxMA'>{this.state.maxAppraisal}ETH</span>
                <span id='artxAA'>Average appraisal: </span><span className='pr-4' aria-labelledby='artxAA'>{this.state.avgAppraisal}ETH</span>
                <span id='artx1A'>Rickyangyang&apos;s appraisal: </span><span className='pr-4' aria-labelledby='artx1A'>{this.state.followingAppraisal[0]}ETH</span>
                <span id='artx2A'>Alvinading&apos;s appraisal: </span><span className='pr-4' aria-labelledby='artx2A'>{this.state.followingAppraisal[1]}ETH</span>
            </div>
        )
    };
};
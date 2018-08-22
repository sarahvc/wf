import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import ReferLink from '../atoms/ReferLink';
import ShareTo from '../atoms/ShareTo';
import Subscribe from '../atoms/Subscribe';
import '../../styles/scss/popup.scss';

export default class Popup extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          //??should these be props or states??
          referred: false,
          amount: 'xxx.xx',
          //inside component
          step: 1,
          isOpen: false
        };

        this.bidSteps = this.bidSteps.bind(this);
        this.closeBid = this.closeBid.bind(this);
        this.setStep = this.setStep.bind(this);
    };

    bidSteps(s, b) {
        const { amount } = this.state;
        switch(s) {
            case 1:
                return (
                    <div>
                        <p className='text-danger'>Please login to your Metamask first</p>
                        <p>Bid Genesis shares ealier to earn more dividend!</p>
                        <div className='form-group row'>
                            <input type='number' id='artxShares'/>
                            <label  htmlFor='artxShares'>shares</label>
                            <button className="btn btn-outline-primary">1X</button>
                            <button className="btn btn-outline-primary">10X</button>
                            <button className="btn btn-outline-primary">100X</button>
                            <button className="btn btn-outline-primary">Average X</button>
                            <button className="btn btn-outline-primary">Max X</button>
                        </div>
                        <p>={amount}ETH</p>
                        <button className="btn btn-outline-primary" type='button' onClick={() => this.setStep(1)}>Next</button>
                    </div>
                );
            case 2:
                    return (
                        <div>
                            <p>Now, guess the final hammer price of Genesis!</p>
                            <p>The top 3 most accurstest lucky people win the Jackpot!</p>
                            <div className='form-group row'>
                                <label  htmlFor='artxA'>Your Appraisal</label>
                                <input type='number' id='artxA' aria-describedby='artxAU'/>
                                <span id='artxAU'>ETH</span>
                            </div>
                            <p>={amount}ETH</p>
                            <button className="btn btn-outline-primary" type='button' onClick={() => this.setStep(1)}>Next</button>  
                        </div>
                    );
            case 3:
                if (b === true) {
                    return (
                        <div>
                            <p>Good news!</p>
                            <p>You are referred by a friend, so you will can get 10% bonus! </p>
                            <p>Referral Link http://decentralism.io/928uhewf/</p>
                            <p className='text-danger'>NOTICE：Please link with your Metamask and try again！</p>
                            <button className="btn btn-outline-primary" type='button' onClick={() => this.setStep(1)}>Bid</button>
                        </div>
                    );
                } else {
                    return (
                        <div>
                            <p>Last step</p>
                            <p>If someone refered you, enter their link to get 10% ETH bonus! </p>
                            <div className='form-group row'>
                                <label  htmlFor='artxRLFI'>Referral Link</label>
                                <input id='artxRLFI' aria-describedby='artxRFLIO'/>
                                <span id='artxRFLIO'>(Optional)</span>
                            </div>
                            <p className='text-danger'>NOTICE：Please link with your Metamask and try again！</p>
                            <button className='btn btn-outline-primary' type='button' onClick={() => this.setStep(1)}>Bid</button>
                        </div>
                    );
                };
            case 4:
                return (
                    <div className='text-center'>
                        <h3 className='text-center'>Congratulations!</h3>
                        <p className='text-center'>Your bidding has been submitted to blockchain!</p>
                        <p className='text-center'>Check your status in <b>Personal Account</b> anytime!</p>
                        <p className='text-center'>Here is your Personal Refferal Link, share to others to win 10% of their money!</p>
                        <p className='text-center'>The more you reffered, the more you earn!</p>
                        <div className='d-flex justify-content-between'>
                            <ReferLink link='uadsfafadf'/>
                            <ShareTo/>
                        </div>
                        <Subscribe/>
                        <button type='button' className='btn btn-outline-primary' onClick={this.closeBid}>Finish</button>
                    </div>
                )
            default:
                return null;
        }
    }

    closeBid () {
        this.setState({isOpen: false, step: 1});
    }

    setStep(num) {
        this.setState(prevState => ({step: prevState.step + num}));
    }

    render() {
        const endsStep = this.state.step === 1 || this.state.step === 4 ? true : false; 
        const {referred, step, isOpen} = this.state;
        return (
            <div>
                <button className='btn btn-outline-primary' onClick={() => this.setState({isOpen: true})}>Bid</button>
                { isOpen
                ? <div className='artx-bid-container bg-white'>
                    <progress className='w-100 mb-1' value={step} max='4'></progress>
                    <div className='artx-bid-inner'>
                        {
                            endsStep
                            ? <div className='text-right'>
                                <button type="button" className="close" aria-label="Close" onClick={this.closeBid}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            : <div className='d-flex justify-content-between'>
                                <button type="button" className='btn btn-outline-primary' aria-label='Go back to previous step' onClick={() => this.setStep(-1)}>
                                    <i className="fas fa-chevron-left"></i>
                                </button>
                                <button type="button" className="close" aria-label="Close" onClick={this.closeBid}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        }
                        <form>
                            {this.bidSteps(step, referred)}
                        </form>
                    </div>
                  </div>
                : null}
            </div>
        )
    }; 
};
import React, { Component }  from 'react';
import ReferLink from '../atoms/ReferLink';
import ShareTo from '../atoms/ShareTo';
import Subscribe from '../atoms/Subscribe';
import eth from '../../styles/assets/ethereum.svg';
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
                        <p className='artx-type-twf text-center text-warning'>Please login to your Metamask first</p>
                        <p className='artx-type-tw text-center artx-gradient-text mb-4'>Bid Genesis shares ealier to earn more dividend! <i className="far fa-question-circle align-text-top artx-gradient-text"></i></p>
                        <div className='form-group text-center mb-4 '>
                            <input type='number' id='artxShares'/>
                            <label className='artx-type-ths text-white' htmlFor='artxShares'>Shares = <span>{amount}</span><img className='artx-eth-s align-baseline ml-2' src={eth} alt='ethereum icon'/></label>
                        </div>
                        <div className='artx-shares-btn text-center amb-9'>
                            <button className="mr-4">
                                <span className='d-inline-block px-4 py-1'>
                                    <span className='artx-type-twf artx-gradient-text'>1X
                                    </span>
                                </span>
                            </button>
                            <button className="mr-4">
                                <span className='d-inline-block px-4 py-1'>
                                    <span className='artx-type-twf artx-gradient-text'>10X
                                    </span>
                                </span>
                            </button>
                            <button className="mr-4">
                                <span className='d-inline-block px-4 py-1'>
                                    <span className='artx-type-twf artx-gradient-text'>100X
                                    </span>
                                </span>
                            </button>
                            <button className="mr-4">
                                <span className='d-inline-block px-4 py-1'>
                                    <span className='artx-type-twf artx-gradient-text'>AVE
                                    </span>
                                </span>
                            </button>
                            <button className="mr-4">
                                <span className='d-inline-block px-4 py-1'>
                                    <span className='artx-type-twf artx-gradient-text'>MAX
                                    </span>
                                </span>
                            </button>
                        </div>
                        <button className="d-block mx-auto artx-btn artx-type-tw text-center text-white py-2 apx-13" type='button' onClick={() => this.setStep(1)}>Next</button>
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
                <button className='d-block ml-auto artx-btn text-white artx-type-twf py-3 apx-14' onClick={() => this.setState({isOpen: true})}>Bid <i className="fas fa-gavel"></i></button>
                { isOpen
                ? <div className='artx-bid-outter'>
                    <progress className='w-100 mb-1' value={step} max='4'></progress>
                    <div className='artx-bid-inner pt-4 apb-14 w-100'>
                        {
                            endsStep
                            ?
                                <button type="button" className="d-block ml-auto amr-9 artx-icon-btn" aria-label="Close" onClick={this.closeBid}>
                                    <i class="fas fa-times artx-type-twf artx-gradient-text"></i>
                                </button>
                            : <div className='d-flex justify-content-between amx-9'>
                                <button type="button" className='artx-icon-btn' aria-label='Go back to previous step' onClick={() => this.setStep(-1)}>
                                    <i className="artx-type-twf fas fa-chevron-left artx-gradient-text"></i>
                                </button>
                                <button type="button" className="artx-icon-btn" aria-label="Close" onClick={this.closeBid}>
                                    <i class="fas fa-times artx-type-twf artx-gradient-text"></i>
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
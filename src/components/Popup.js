import React from 'react';

export default class Popup extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          //??should these be props or states??
          uName: 'Rickyyangyang',
          referred: false,
          //inside component
          step: '1',
          shares: 'xxx.xx',
          amount: 'xxx.xx'
        };
    };

    bidSteps(s, b) {
        switch(s) {
            case '1':
                return (
                    <div>
                        <p class='text-warning'>Please login to your Metamask first</p>
                        <p>Bid Genesis shares ealier to earn more dividend!</p>
                        <div class='form-group row'>
                            <input type='number' id='artxShares'>
                            <label for='artxShares'>shares</label>
                            <button>1X</button>
                            <button>10X</button>
                            <button>100X</button>
                            <button>Average X</button>
                            <button>Max X</button>
                        </div>
                        <p>={this.state.amount}ETH</p>
                        <button onClick={this.setState({step: '2'})}>Next</button>
                    </div>
                );
            case '2':
                    return (
                        <div>
                            <p>Now, guess the final hammer price of Genesis!</p>
                            <p>The top 3 most accurstest lucky people win the Jackpot!</p>
                            <div class='form-group row'>
                                <label for='artxA'>Your Appraisal</label>
                                <input type='number' id='artxA' aria-describedby='artxAU'>
                                <span id='artxAU'>ETH</span>
                            </div>
                            <p>={this.state.amount}ETH</p>
                            <button onClick={this.setState({step: '3'})}>Next</button>  
                        </div>
                    );
            case '3':
                if (b === true) {
                    return (
                        <div>
                            <p>Good news!</p>
                            <p>You are referred by a friend, so you will can get 10% bonus! </p>
                            <p>Referral Link   http://decentralism.io/928uhewf/ </p>
                            <p class='text-warning'>NOTICE：Please link with your Metamask and try again！</p>
                            <button type='submit'>Bid</button>
                        </div>
                    );
                } else {
                    return (
                        <div>
                            <p>Last step</p>
                            <p>If someone refered you, enter their link to get 10% ETH bonus! </p>
                            <div class='form-group row'>
                                <label for='artxRLFI'>Referral Link</label>
                                <input id='artxRLFI' aria-describedby='artxRFLIO'>
                                <span id='artxRFLIO'>(Optional</span>
                            </div>
                            <p class='text-warning'>NOTICE：Please link with your Metamask and try again！</p>
                            <button type='submit'>Bid</button>
                        </div>
                    );
                };
            default:
                return null;
        }
    }

    render() {
        const firstStep = this.state.step === '1' ? true : false; 
        return (
            <div className='artx-bid-container'>
                <progress className='w-100 mb-1' value={this.state.step} max='3'></progress>
                <div className='artx-bid-inner'>
                    {
                        firstStep
                        ? <div className='text-right'>
                            <button type="button" className="close" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                        : <div class='d-flex justify-content-between'>
                            <button type="button" class='btn' aria-label='Go back to previous step'>
                                <i class="fas fa-chevron-left"></i>
                            </button>
                            <button type="button" className="close" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                    }
                    <form>
                        {this.bidSteps(this.state.step, this.state.referred)}
                    </form>
                </div>
            </div>
        )
    }; 
};
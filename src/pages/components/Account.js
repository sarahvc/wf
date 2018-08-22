import React, { Component }  from 'react';
//import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import AccountTR from '../atoms/AccountTR';
import ReferLink from '../atoms/ReferLink';
import ShareTo from '../atoms/ShareTo';
import '../../styles/scss/account.scss';

export default class Account extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
        //api
        uName: 'Rickyyangyang',
        walletAddr: 'jwefwe87…2kwefjefew7yr23ifu',
        uEmail: 'Rickyyangyang@artx.io',
        //shareTo: ['ry', 'clem', 'sarah'],
        bid: 'XXX.xxxx',
        shares: 'XXX.xxxx',
        referEarnings: 'XXX.xxxx',
        totalEarnings: 'XXX.xxxx',
        withdrawn: 'XXX.xxxx',
        availForWithdraw: 'XXX.xxxx',
        //inside component
        eidtName: false,
        isOpen: false
      };

      this.triggerW = this.triggerW.bind(this);
      this.changeName = this.triggerW.bind(this);
    };

    triggerW() {
        return;
    };

    changeName() {
        this.setState(prevState => ({editName: !prevState.editName}));
    }

    render() {
        const {uName, walletAddr, uEmail, bid, shares, referEarnings, totalEarnings, withdrawn, availForWithdraw, editName, isOpen} = this.state;
        return (
            <div>
                <button className='btn btn-outline-primary' type='button' onClick={() => this.setState({isOpen: true})}>Personal Account</button>
                {
                    isOpen
                    ? <div className='artx-account-container bg-white p-3'>
                        <div className='text-right'>
                            <button type="button" className="close" aria-label="Close" onClick={() => this.setState({isOpen: false})}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className='ml-3 mb-3 mr-3'>
                            <form>
                                <div className="form-group row">
                                    <label  htmlFor="artxAN" className="">Account Name</label>
                                    <div className="d-flex justify-content-between border-bottom">
                                        <input type="text" className="form-control" id="artxAN" value={uName}/>
                                        { editName
                                        ? <button className="btn btn-outline-primary" type='submit' onClick={this.changeName}>Submit</button>
                                        : <button className="btn btn-outline-primary" onClick={this.changeName} aria-label='edit account name' type='button'>
                                        <i className="far fa-edit"></i>
                                    </button>}
                                    </div>
                                </div>
        
                                <div className="form-group row">
                                    <label  htmlFor="artxWA" className="">Wallet Address</label>
                                    <div className="border-bottom">
                                        <input type="text" readonly className="form-control-plaintext" id="artxWAd" value={walletAddr}/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label  htmlFor="artxE" className="">Email</label>
                                    <div className="border-bottom">
                                        <input type="email" readonly className="form-control-plaintext" id="artxE" value={uEmail}/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label  htmlFor="artxRL" className="">Personal Referral Link</label>
                                    <div className="border-bottom">
                                        <ReferLink link='uadsfafadf'/>
                                    </div>
                                </div>
                            </form>
                            <div className='d-flex'>
                                <p>Share to</p>
                                <ShareTo/>
                            </div>
                            <table className='artx-account-table'>
                                <thead className="sr-only">
                                    <tr>
                                        <th>User profile item</th>
                                        <th>User profile content</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <AccountTR label='Bid' content={bid}/>
                                    <AccountTR label='Shares' content={shares}/>
                                    <AccountTR label='Referral' content={referEarnings}/>
                                    <AccountTR label='Total Earnings' content={totalEarnings}/>
                                    <AccountTR label='Withdrawn' content={withdrawn}/>
                                    <AccountTR label='Available for withdraw' content={availForWithdraw}/>
                                </tbody>
                            </table>
                            <button className='w-100 btn btn-outline-primary' onClick={this.triggerW} type='button'>Withdraw</button>
                        </div>
                    </div>
                    : null
                }
            </div>
        )
    };
};

    
import React, { Component }  from 'react';
//import ReactDOM from 'react-dom';
//import PropTypes from 'prop-types';
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
        editName: false
      };
    };

    triggerW() {
        return;
    };

    render() {
        return (
            <div className='artx-account-container p-3'>
                <div className='text-right'>
                    <button type="button" className="close" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className='ml-3 mb-3 mr-3'>
                    <form>
                        <div className="form-group row">
                            <label for="artxAN" className="">Account Name</label>
                            <div className="d-flex justify-content-between border-bottom">
                                <input type="text" className="form-control" id="artxAN" value={this.state.uName}/>
                                { this.state.editName
                                ? <button className="btn btn-outline-primary" type='submit' onClick={this.setState(prevState => ({editName: !prevState.editName}))}>Submit</button>
                                : <button className="btn btn-outline-primary" onClick={this.setState(prevState => ({editName: !prevState.editName}))} aria-label='edit account name'>
                                <i className="far fa-edit"></i>
                            </button>}
                            </div>
                        </div>

                        <div className="form-group row">
                            <label for="artxWA" className="">Wallet Address</label>
                            <div className="border-bottom">
                                <input type="text" readonly className="form-control-plaintext" id="artxWAd" value={this.state.walletAddr}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="artxE" className="">Email</label>
                            <div className="border-bottom">
                                <input type="email" readonly className="form-control-plaintext" id="artxE" value={this.state.uEmail}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="artxRL" className="">Personal Referral Link</label>
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
                            <AccountTR label='Bid' content={this.state.bid}/>
                            <AccountTR label='Shares' content={this.state.shares}/>
                            <AccountTR label='Referral' content={this.state.referEarnings}/>
                            <AccountTR label='Total Earnings' content={this.state.totalEarnings}/>
                            <AccountTR label='Withdrawn' content={this.state.withdrawn}/>
                            <AccountTR label='Available for withdraw' content={this.state.availForWithdraw}/>
                        </tbody>
                    </table>
                    <button className='w-100 btn btn-outline-primary' onClick={this.triggerW}>Withdraw</button>
                </div>
            </div>
        )
    };
};

    
import React, { Component }  from 'react';

export default class Subscribe extends Component {    
    constructor(props) {
    super(props)

    this.state = {
      subEmail: ''
    };
  };

    handleSub() {
        this.setState({subEmail: 'sarahvc@qq.com'});
    };
    render () {
        return (
            <form>
                <div className="form-group text-center">
                    <label htmlFor='subscribeEmail'>Enter your email to stay in touch with us!</label><br/>
                    <input type='email' id='subscribeEmail'/><button type="submit" className="btn btn-outline-primary" onClick={this.handleSub}>JOIN NOW</button>
                </div>
            </form>
        )
    };
};
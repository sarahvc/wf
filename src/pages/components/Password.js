import React, { Component } from 'react';

class Password extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            showContent: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        if (this.state.value === 'monstertruck') {
            this.setState({showContent: true});
        };
        event.preventDefault();
    }

    render() {
        return (
            <div className='fw-password w-100'>
                {this.state.showContent
                ?this.props.children
                :<form onSubmit={this.handleSubmit} className='mx-auto mt-5 pt-5 input-group'>
                    <input type='text' value={this.state.value} onChange={this.handleChange} placeholder="Password" className="form-control" />
                    <div className="input-group-append">
                        <input type='submit' value="Submit" className="btn btn-outline-secondary"/>
                    </div>
                </form>}
            </div>
        );
    }
}

export default Password;
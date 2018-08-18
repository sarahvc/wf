import React from 'react';

const Subscribe = () => {
    handleSub() {
        return;
    };
    return (
        <form className='text-center'>
            <div className="form-group row">
                <label for='subscribeEmail'>Enter your email to stay in touch with us!</label>
                <input type='email' id='subscribeEmail'><button type="submit" className="" onClick={this.handleSub()}>JOIN NOW</button>
            </div>
        </form>
    )
};

export default Subscribe;
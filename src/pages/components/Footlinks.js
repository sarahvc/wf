import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Footlinks extends Component {
    render() {
        const url = '/projects/';
        return (
            <div className='container d-flex justify-content-between mt-5'>
                <a className='text-green' href='/'>Work</a>
                <div>
                    {this.props.prev
                    ?<a className='text-green' href={url.concat(this.props.prev)}>Prev</a>
                    :null
                    }
                    {this.props.prev&&this.props.next
                    ?<span> / </span>
                    :null
                    }
                    {this.props.next
                    ?<a className='text-green' href={url.concat(this.props.next)}>Next</a>
                    :null
                    }
                </div>
            </div>
        );
    }
}

Footlinks.propTypes = {
    next: PropTypes.string,
    prev: PropTypes.string
};

export default Footlinks;
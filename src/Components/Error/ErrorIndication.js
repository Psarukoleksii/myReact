import React, {Component} from 'react';
import './ErrorIndication.css';

class ErrorIndication extends Component {
    render() {
        return (
            <div className={'errorIco'}>
                <div>
                    <h2>
                        404
                    </h2>
                    <p>
                        page not found
                    </p>
                </div>
            </div>
        );
    }
}

export default ErrorIndication;

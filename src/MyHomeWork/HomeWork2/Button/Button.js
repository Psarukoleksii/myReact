import React, {Component} from 'react';
import './Button.css';

class Button extends Component {

    state = {
        flag: false,
        cls: 'post1'
    }

    onChange = () => {
        this.state.cls === 'post1' ? this.setState({flag: !this.state.flag, cls: 'post2'}) : this.setState({flag: !this.state.flag, cls: 'post1'})
    }

    render() {
        return (
            <div>
                <p className={this.state.cls}>HELLO WORLD</p>
                <button onClick={this.onChange}>Click me!</button>
            </div>
        );
    }
}

export default Button;

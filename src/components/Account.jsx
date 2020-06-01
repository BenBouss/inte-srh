import React, { Component } from 'react'
import AccountInfo from './AccountInfo'

class Account extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        show: false
    }
    toggle = () => this.setState((currentState) => ({show: !currentState.show}));
    render() {
        return (
            <div className={`account ${this.state.show ? "Open" : "Close"}`} onClick={this.toggle}>
                <div className="accountOuter flex-items-center">
                    <span className="accountIcon flex-items-center"></span>
                    <span className="accountMail">johndoe@mail.com</span>
                </div>
                {this.state.show &&
                    <AccountInfo />
                }
            </div>
        );
    }
}

export default Account;
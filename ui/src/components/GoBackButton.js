import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class GoBackButton extends Component {

    render() {
        return (
            <div>
                <button onClick={this.props.history.goBack}>&lt; Go back</button>
            </div>
        );
    }
}

export default withRouter(GoBackButton);
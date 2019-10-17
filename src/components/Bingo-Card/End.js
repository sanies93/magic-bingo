import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from "@material-ui/core";

class End extends React.Component {
    handleClick = () => {
        this.props.history.push("/dashboard");
    }

    render() {
        return <Button onClick={this.handleClick} className="end">Leave Game</Button>
    }
}

export default withRouter(End);
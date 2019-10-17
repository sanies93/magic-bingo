import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from "@material-ui/core";

class Restart extends React.Component {
    handleClick = () => {
        window.location.reload();
    }

    render() {
        return <Button onClick={this.handleClick} className="restart">Restart Game</Button>
    }
}

export default withRouter(Restart);
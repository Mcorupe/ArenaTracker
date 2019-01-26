import React from 'react';


class WinLoss extends React.Component { 
    constructor(props) {
        super(props)
        this.state = {
            win: '',
            loss: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(event) {
        this.setState({
            win: event.target.value,
            loss: event.target.value
        });
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <br></br>
                <button onSubmit={this.handleSubmit}>W</button>
                <button onSubmit={this.handleSubmit}>L</button>
            </form>
        )
    }
}


export default WinLoss;




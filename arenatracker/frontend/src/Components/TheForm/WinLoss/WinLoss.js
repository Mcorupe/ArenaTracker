import React from 'react';
import styled from 'styled-components';


const ButtonWin = styled.button`
    background-color: #BDC04E;
    color: black;
    font-size: 42px;
    display: inline-block;
    padding: 15px 32px;
    
`;


const ButtonLoss = styled.button`
    background-color: #C04E4E;
    color: black;
    font-size: 43px;
    display: inline-block;
    padding: 15px 32px;
`;
    

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
                <ButtonWin onClick={this.handleSubmit} name="winButton">W</ButtonWin>
                <ButtonLoss onClick={this.handleSubmit} name="lossButton">L</ButtonLoss>
            </form>
        )
    }
}


export default WinLoss;




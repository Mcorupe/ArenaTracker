import React from 'react';
import styled from 'styled-components';


const ButtonWin = styled.button`
    background-color: #D4AF37;
    border: 2px solid grey;
    border-radius: 3px
    color: black;
    font-size: 50px;
    font-family: 'Metal Mania', cursive;
    display: inline-block;
    padding: 15px 30px;

    &:hover { 
        background: #FFDF00;
        border: 2px solid #CD853F;}
    
`;

const ButtonLoss = styled.button`
    background-color: #8B0000;
    border: 2px solid grey;
    border-radius: 3px
    color: black;
    font-size: 50px;
    font-family: 'Metal Mania', cursive;
    display: inline-block;
    padding: 15px 34px;
    
    &:hover { 
        background: #C21807;
        border: 2px solid #8B0000;}
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
                <ButtonWin  onClick={this.handleSubmit} name="winButton">W</ButtonWin>
                <ButtonLoss onClick={this.handleSubmit} name="lossButton">L</ButtonLoss>
            </form>
        )
    }
}


export default WinLoss;




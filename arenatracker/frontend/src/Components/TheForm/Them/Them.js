import React from 'react';


class TheThemForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            killTarget: '',
            ccChain: ''
        };
    
            this.handleChange = this.handleChange.bind(this);

    }



handleChange(event) {
    this.setState({
        killTarget: event.target.value1,
        ccChain: event.target.value3
     });
    }
render(){
    return(
        <form onSubmit={this.handleSubmit}>
        <br></br>
        <label> Them </label>
        <br></br>
        <br></br>
        <label>Kill Target</label>
        <br></br>
            <div className="killTarget">
                <select value={this.state.value1} onChange={this.handleChange}>
                    <option value="Un-Named">---------</option>
                    <option value="Any">Any</option>
                    <option value={"Death Knight"}>Death Knight</option>
                    <option value={"Demon Hunter"}>Demon Hunter</option>
                    <option value={"Druid"}>Druid</option>
                    <option value={"Hunter"}>Hunter</option>
                    <option value={"Mage"}>Mage</option>
                    <option value={"Monk"}>Monk</option>
                    <option value={"Paladin"}>Paladin</option>
                    <option value={"Priest"}>Priest</option>
                    <option value={"Rogue"}>Rogue</option>
                    <option value={"Shaman"}>Shaman</option>
                    <option value={"Warlock"}>Warlock</option>
                    <option value={"Warrior"}>Warrior</option>
                </select>
            <br></br>
            <label>CC-Chain</label>
            <div className="ccChain">
                <select value={this.state.value2} onChange={this.handleChange}>
                    <option value="placeholder">---------</option>
                    <option value="placeholder2">coming back to this whole</option> 
                    <option value="placeholder3">shitshow feature im going to hate later</option>
                </select>
            </div>
            </div>
        </form>
        )
    }
}

export default TheThemForm;
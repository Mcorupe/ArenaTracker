import React from 'react';
/* 

Trying to convert someone elses code into something
that i can use for the NestedDropDowns for 
Class/Spec selections for the form.

*/

class TheVsForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(e) {
        this.setState({value: event.target.value});
    }

    handleSubmit(e) {
        this.state.value;
        event.preventDefault();
    }


    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <label>
                Pick your team comp:
            </label>
                <div class="comps">
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="Cupid Cleave">Cupid Cleave</option>  {/*Ret/hunt/x*/}
                    <option value="God Comp">God Comp</option>          {/*Spriest/Mage/Rdruid*/}
                    <option value="KFC">KFC</option>                    {/*war/hunt/x*/}
                    <option value="RMP">RMP</option>                    {/*rog/mage/priest*/}
                    <option value="LSD">LSD</option>                    {/*lock/ele/Rdruid*/}
                    <option value="LSD2">LSD2</option>                  {/*lock/boom/Rsham*/}
                    <option value="OwlPlay">OwlPlay</option>            {/*boom/spriest/x*/}
                    <option value="Stormrage">Stormrage</option>        {/*DH/boom/Rsham*/}
                    <option value="Shatterplay">Shatterplay </option>   {/*Spriest/Mage/x*/}
                    <option value="Thug Cleave">Thug Cleave</option>    {/*rog/hunt/x*/}
                    <option value="TSG">TSG</option>                    {/*DK/War/x*/}
                    <option value="Turbo Cleave">Turbo Cleave</option>  {/*Enh/War/x*/}
                </select>
                </div>
            <br></br>
            <label>
                Dps 1:
                <select value={this.state.value} onChange={this.handleChange}>
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
            </label>
            <br></br>
            <label>
                Dps 2:
                <select value={this.state.value} onChange={this.handleChange}>
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
            </label>
            <br></br>
            <label>
                Healer:
                <select value={this.state.value} onChange={this.handleChange}>
                <option value={"Druid"}>Druid</option>
                <option value={"Monk"}>Monk</option>
                <option value={"Paladin"}>Paladin</option>
                <option value={"Priest"}>Priest</option>
                <option value={"Shaman"}>Shaman</option>
                </select>
            </label>
            </form>
        )
    }

}


const TheVsForm = document.getElementById('TheVsForm');
ReactDOM.render(<TheVsForm/>, TheVsForm);
  

export default TheVsForm;
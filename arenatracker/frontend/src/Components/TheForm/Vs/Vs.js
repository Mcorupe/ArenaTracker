import React from 'react';



class TheVsForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            compsA: [
                {name:'Cupid Cleave'},
                {name: 'God Comp'},         //using maybe an array? key/value pair maybe
                {name: 'KFC'}
            ],
            dpsA1: '',
            dpsA2: '',
            healerA: '',
            compsB: [
                {name:'Cupid Cleave'},
                {name: 'God Comp'},         
                {name: 'KFC'}
            ],
            dpsB1: '',
            dpsB2: '',
            healerB: ''};



        this.handleChange = this.handleChange.bind(this);
        // this.handleComp = this.handleComp.bind(this);
    }


    handleChange(event) {
        this.setState({
            //comps: event.target.value,
            dps1: event.target.value1,
            dps2: event.target.value2,
            healer: event.target.value3
            //value: event.target.value});
        });
    }

    // handleComp(event) {
    //     this.setState({
    //         dps1: event.target.value1,
    //         dps2: event.target.value2,
    //         healer: event.target.value3});
    // }

    

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <label>
                Your team comp: 
            </label>
                <div className="comps">
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="Un-Named">------------------</option>
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
                <option value="Un-Named">------------------</option>
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
                <option value="Un-Named">----------------</option>
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
                <option value={"UnNamed"}>-------------------</option>
                <option value={"Druid"}>Druid</option>
                <option value={"Monk"}>Monk</option>
                <option value={"Paladin"}>Paladin</option>
                <option value={"Priest"}>Priest</option>
                <option value={"Shaman"}>Shaman</option>
                </select>
            </label>
            <br></br>
                <label><b><i>-------------------------------------------VS--------------------------------------------</i></b></label>
            <br></br>

            <label>
                Enemy team's comp:
            </label>
                <div className="comps">
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="Un-Named">------------------</option>
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
                <option value={"UnNamed"}>-------------------</option>
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
                <option value={"UnNamed"}>-------------------</option>
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
                <option value={"UnNamed"}>-------------------</option>
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

  

export default TheVsForm;
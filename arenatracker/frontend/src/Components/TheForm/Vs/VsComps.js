import React from 'react';
import DropdownMenu from 'react-dd-menu';
import VsRoles from "./VsRoles";


const teamCompAuto = [
    {
		key: 'Cupid Cleave',
		modules: [
			{dps1: 'Retribution'},
			{dps2: 'Survival'},
			{healer: 'Discipline'}],
    }
]
    

class TheVsForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
         enemyComp: "---------------",
         teamComp: "---------------",
         teamCompAuto,
         enemyCompOpen: false,
         teamCompOpen: false,
        }

    }

    toggle = (event) => {
        const {target: {name}} = event;
        const {teamCompOpen, enemyCompOpen} = this.state;
        this.setState({[name]: !this.state[name]}  );
        // this.setState((prevState) => {
        //     const keys = Object.keys(prevState);
        //     if(keys.indexOf(name)> -1) {
        //       return {[name]: !prevState[name]}  
        //     }
        // })
      }
     
    close = (event)=> {
        const { target: {value, name}} = event;
        const {teamCompOpen, enemyCompOpen} = this.state;
        console.log(this.state,"before")
        event.preventDefault();
        this.setState({ [name]: value });
        if (name === "teamComp") {
            console.log("in if statement")
            this.setState({teamCompOpen: !this.state.teamCompOpen})
            console.log(this.state)
        } else {
            this.setState({enemyCompOpen: !enemyCompOpen})
        }
      }

    

    render(){
        const { teamComp, enemyComp } = this.state;
        const menuOptions = {
            isOpen: this.state.teamCompOpen,
            close: this.close,
            toggle: <button type="button" name="teamCompOpen" onClick={this.toggle}>{teamComp}</button>,
            align: 'right'
        }
        const menuOptions2 = {
            isOpen: this.state.enemyCompOpen,
            close: this.close,
            toggle: <button type="button" name="enemyCompOpen" onClick={this.toggle}>{enemyComp}</button>,
            align: 'right'
        }
        return(
            <form onSubmit={this.handleSubmit}>
            <label>
                Your team comp: 
            </label>
                <div className="comps">
                <DropdownMenu {...menuOptions} value={this.state.value}>
                    <li> <button onClick={this.close} name="teamComp" value="Cupid Cleave">Cupid Cleave</button></li>  {/*Ret/hunt/x*/}
                    <li> <button onClick={this.close} name="teamComp" value="God Comp">God Comp</button></li>          {/*Spriest/Mage/Rdruid*/}
                    <li> <button onClick={this.close} name="teamComp" value="KFC">KFC</button></li>                    {/*war/hunt/x*/}
                    <li> <button onClick={this.close} name="teamComp" value="RMP">RMP</button></li>                    {/*rog/mage/priest*/}
                    <li> <button onClick={this.close} name="teamComp" value="LSD">LSD</button></li>                    {/*lock/ele/Rdruid*/}
                    <li> <button onClick={this.close} name="teamComp" value="LSD2">LSD2</button></li>                  {/*lock/boom/Rsham*/}
                    <li> <button onClick={this.close} name="teamComp" value="OwlPlay">OwlPlay</button></li>            {/*boom/spriest/x*/}
                    <li> <button onClick={this.close} name="teamComp" value="Stormrage">Stormrage</button></li>        {/*DH/boom/Rsham*/}
                    <li> <button onClick={this.close} name="teamComp" value="Shatterplay">Shatterplay</button> </li>   {/*Spriest/Mage/x*/}
                    <li> <button onClick={this.close} name="teamComp" value="Thug Cleave">Thug Cleave</button></li>    {/*rog/hunt/x*/}
                    <li> <button onClick={this.close} name="teamComp" value="TSG">TSG</button></li>                    {/*DK/War/x*/}
                    <li> <button onClick={this.close} name="teamComp" value="Turbo Cleave">Turbo Cleave</button></li>  {/*Enh/War/x*/}
                </DropdownMenu>
                </div>
            <br></br>
            <br></br>
            <VsRoles autofill={teamComp} role="dps1"/>
            <VsRoles autofill={teamComp} role="dps2"/>
            <VsRoles autofill={teamComp} role="healer"/>
            <label><b><i>-------------------------------------------VS--------------------------------------------</i></b></label>
            <br></br>

            <label>
                Enemy team's comp:
            </label>
                <div className="comps">
                <DropdownMenu {...menuOptions2} value={this.state.value}>
                    <li> <button onClick={this.close} name="enemyComp" value="Cupid Cleave">Cupid Cleave</button></li>  {/*Ret/hunt/x*/}
                    <li> <button onClick={this.close} name="enemyComp" value="God Comp">God Comp</button></li>          {/*Spriest/Mage/Rdruid*/}
                    <li> <button onClick={this.close} name="enemyComp" value="KFC">KFC</button></li>                    {/*war/hunt/x*/}
                    <li> <button onClick={this.close} name="enemyComp" value="RMP">RMP</button></li>                    {/*rog/mage/priest*/}
                    <li> <button onClick={this.close} name="enemyComp" value="LSD">LSD</button></li>                    {/*lock/ele/Rdruid*/}
                    <li> <button onClick={this.close} name="enemyComp" value="LSD2">LSD2</button></li>                  {/*lock/boom/Rsham*/}
                    <li> <button onClick={this.close} name="enemyComp" value="OwlPlay">OwlPlay</button></li>            {/*boom/spriest/x*/}
                    <li> <button onClick={this.close} name="enemyComp" value="Stormrage">Stormrage</button></li>        {/*DH/boom/Rsham*/}
                    <li> <button onClick={this.close} name="enemyComp" value="Shatterplay">Shatterplay</button> </li>   {/*Spriest/Mage/x*/}
                    <li> <button onClick={this.close} name="enemyComp" value="Thug Cleave">Thug Cleave</button></li>    {/*rog/hunt/x*/}
                    <li> <button onClick={this.close} name="enemyComp" value="TSG">TSG</button></li>                    {/*DK/War/x*/}
                    <li> <button onClick={this.close} name="enemyComp" value="Turbo Cleave">Turbo Cleave</button></li>  {/*Enh/War/x*/}
                </DropdownMenu>
                
                </div>
            <br></br>
            <br></br>
            <VsRoles autofill={enemyComp} role="enemydps1"/>
            <VsRoles autofill={enemyComp} role="enemydps2"/>
            <VsRoles autofill={enemyComp} role="enemyhealer"/>
            </form>
        )
    }

}

  

export default TheVsForm;
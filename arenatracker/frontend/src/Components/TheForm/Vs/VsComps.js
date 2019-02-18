import React from 'react';
import DropdownMenu from 'react-dd-menu';
import VsRoles from "./VsRoles";


const teamCompAuto = [
    {
		key: 'Cupid Cleave',
		modules: [
			{dps1: 'Retribution'},
			{dps2: 'Survival'},
			{healer: 'Discipline'}]
    },{
        key: 'God Comp',
        modules: [
            {dps1: 'Shadow'},
            {dps2: 'Frost'},
            {healer: 'Resto'}]
    },{
        key: 'KFC',
        modules: [
            {dps1:'Arms'}, 
            {dps2: 'Beast Master'},
            {healer: 'Resto'}]
    },{
        key: 'RMP',
        modules: [
            {dps1:'Assassin'}, 
            {dps2: 'Frost'},
            {healer: 'Discipline'}]
    },{
        key: 'LSD',
        modules: [
            {dps1:'Destruction'}, 
            {dps2: 'Elemental'},
            {healer: 'Resto'}]
    },{
        key: 'LSD2',
        modules: [
            {dps1:'Destruction'}, 
            {dps2: 'Balance'},
            {healer: 'Resto'}]
    },{
        key: 'OwlPlay',
        modules: [
            {dps1:'Balance'}, 
            {dps2: 'Shadow'},
            {healer: 'Resto'}]
    },{
        key: 'Stormrage',
        modules: [
            {dps1:'Vengeance'}, 
            {dps2: 'Balance'},
            {healer: 'Resto'}]
    },{
        key: 'Shatterplay',
        modules: [
            {dps1:'Shadow'}, 
            {dps2: 'Frost'},
            {healer: 'Resto'}]
    },{
        key: 'Thug Cleave',
        modules: [
            {dps1:'Subtlety'}, 
            {dps2: 'Beastmaster'},
            {healer: 'Resto'}]
    },{
        key: 'TSG',
        modules: [
            {dps1:'Unholy'}, 
            {dps2: 'Arms'},
            {healer: 'Holy'}]
    },{
        key: 'Turbo',
        modules: [
            {dps1:'Enhance'}, 
            {dps2: 'Arms'},
            {healer: 'Mistweaver'}]
    },
]
    

class TheVsForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
         enemyComp: "---------------",
         teamComp: "---------------",
         teamCompAuto: [],
         enemyCompOpen: false,
         teamCompOpen: false,
        }

    }

    toggle = (event) => {
        const {target: {name}} = event;
        const {teamCompOpen, enemyCompOpen} = this.state;
        this.setState({[name]: !this.state[name]}  );
        //this.setState({teamCompOpen: !this.state.teamCompOpen})
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
            console.log("<<><<>><<<<><<><<>< in the 'close' func's if statement>>>>><>>>><>>>>><>>><>>")
            this.setState({teamCompOpen: false})
        } else {
            this.setState({enemyCompOpen: false})
        }
      }

    // autofill = (event) => {
    //     const {teamCompAuto: {key, modules}} = event;
    //     const {dps1, dps2, healer} = this.state;
    //     event.preventDefault();
    //     this.setState({ [key]:modules});
    // }

    render(){
        const { teamComp, enemyComp } = this.state;
        const menuOptions = {
            isOpen: this.state.teamCompOpen,
            close: this.close,
            toggle: <button type="button" name="teamCompOpen" onClick={this.toggle}>{teamComp}</button>,
            align: 'right',
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
                    <li> <button onClick={this.close} name="teamComp" value="Variant">Variant/Hybrid</button></li>
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
            {/* pass in teampcomp/enemycomp as a prop */}
            <VsRoles autofill={teamCompAuto} selectedTeamComp={this.state.teamComp} name="dps1"/>  
            <VsRoles autofill={teamCompAuto} name="dps2"/>
            <VsRoles autofill={teamCompAuto} name="healer"/>
            <label>
            <br/>
            <i>-------------------------------------------VS--------------------------------------------</i></label>
            <br/>

            <label>
                Enemy team's comp:
            </label>
                <div className="comps">
                <DropdownMenu {...menuOptions2} value={this.state.value}>
                <li> <button onClick={this.close} name="teamComp" value="Variant">Variant/Hybrid</button></li>
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
            <VsRoles autofill={enemyComp} name="enemydps1"/>
            <VsRoles autofill={enemyComp} name="enemydps2"/>
            <VsRoles autofill={enemyComp} name="enemyhealer"/>
            </form>
        )
    }

}

  

export default TheVsForm;
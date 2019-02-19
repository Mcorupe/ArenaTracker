import React from 'react';
import DropdownMenu , { NestedDropdownMenu } from 'react-dd-menu';
import './ddMenu.css';

/*
TODO:
1. get autofill functionallity
	call componentDidUpdate  or whatever it's depricated to
	pass in parameters		//prevstate, prevprops
	if (this.props.selectedTeamComp === cupicCleave && this.props.name === dps1)

2. set limits on healer selections

*/

const classHealerModules = [
	{
	key: 'Druid',
		theDontClick: false,
		color: '#FF7D0A',
		modules: [
			{key: 'Restoration'}]
	}, {
		key: 'Monk',
		theDontClick: false,
		color: '#00FF96',
		modules: [
			{key: 'Mistweaver'}]
	}, {
		key: 'Paladin',
		theDontClick: false,
		color: '#F58CBA',
		modules: [
			{key: 'Holy'}]
	},  {
		key: 'Priest',
		theDontClick: false,
		color: '#FFFFFF',
		modules: [
			{key: 'Discipline'},
			{key: 'Holy'}]
	}, {
		key: 'Shaman',
		theDontClick: false,
		color: '#0070DE',
		modules: [
			{key: 'Restoration'}]
	}
]
const classDmgModules = [
    {
		key: 'Death Knight',
		theDontClick: false,
		color: '#C41F3B',
		modules: [
			{key: 'Blood'},
			{key: 'Frost'},
			{key: 'Unholy'}],
	}, {
		key: 'Demon Hunter',
		theDontClick: false,
		color: '#A330C9',
		modules: [
			{key: 'Havoc'},
			{key: 'Vengeance'}],
	},{
		key: 'Druid',
		theDontClick: false,
		color: '#FF7D0A',
		modules: [
			{key: 'Balance'},
			{key: 'Feral'},
			{key: 'Guardian'}]
			
	}, {
		key: 'Hunter',
		theDontClick: false,
		color: '#ABD473',
		modules: [
			{key: 'Beastmaster'},
			{key: 'Marksman'},
			{key: 'Survival'}],
	}, {
		key: 'Mage',
		theDontClick: false,
		color: '#40C7EB',
		modules: [
			{key: 'Arcane'},
			{key: 'Fire'},
			{key: 'Frost'}],
	}, {
		key: 'Monk',
		theDontClick: false,
		color: '#00FF96',
		modules: [
			{key: 'Brewmaster'},
			{key: 'Windwalker'}],
	}, {
		key: 'Paladin',
		theDontClick: false,
		color: '#F58CBA',
		modules: [
			{key: 'Protection'},
			{key: 'Retribution'}],
	}, {
		key: 'Priest',
		theDontClick: false,
		color: '#FFFFFF',
		modules: [
			{key: 'Shadow'}],
	}, {
		key: 'Rogue',
		theDontClick: false,
		color: '#FFF569',
		modules: [
			{key: 'Assassination'},
			{key: 'Subtlety'},
			{key: 'Outlaw'}],
	}, {
		key: 'Shaman',
		theDontClick: false,
		color: '#0070DE',
		modules: [
			{key: 'Elemental'},
			{key: 'Enhance'}],
	}, {
		key: 'Warlock',
		theDontClick: false,
		color: '#8787ED',
		modules: [
			{key: 'Affliction'},
			{key: 'Demonology'},
			{key: 'Destruction'}],
	}, {
		key: 'Warrior',
		theDontClick: false,
		color: '#C79C6E',
		modules: [
			{key: 'Arms'},
			{key: 'Fury'},
			{key: 'Protection'}],
	},
]



class TheVsForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
		 classDmgModules,
		 classHealerModules
        }
    }

    toggle = () => {
			this.setState({ isMenuOpen: !this.state.isMenuOpen });
		}
		
     
    close = (event) => {
		const thing = event.target.getAttribute('data-canclick');
		event.preventDefault();
		if ((thing === true || thing === null)){
			const { target: {value}} = event;
			this.setState({ isMenuOpen: false, dmg: value });   // character: value
			}
		}
	
    render(){
		const { name } = this.props;
		const { dmg, healer } = this.state;
		//const {character} = this.state;
        const menuOptions = {
            isOpen: this.state.isMenuOpen,
            close: this.close,
            toggle: <button type="button" onClick={this.toggle}>{dmg ? dmg : name }</button>, //{character ? character : name}
			align: 'right'
		};
		const menuOptions2 = {
            isOpen: this.state.isMenuOpen,
            close: this.close,
            toggle: <button type="button" onClick={this.toggle}>{healer ? healer : name }</button>, //{character ? character : name}
			align: 'right'
        };

		return(
			<>
            <DropdownMenu  {...menuOptions}>
				{classDmgModules.map(specs => {
					const nestedProps1 = {
						toggle: <button onClick={this.close} name={name} data-canclick={specs.theDontClick} value={specs.key}>{specs.key}</button>,
						animate: false,
						leaveTimeout: 1,
						delay: 1,
					};
					
					return (
						<>
		<NestedDropdownMenu {...nestedProps1}>
        {specs.modules.map(modules=>{
			return (
				<li><button onClick={this.close} name={name} value={modules.key}>{modules.key}</button></li>
				)})}

			</NestedDropdownMenu>
			
			</>
		
		)
	} )}                            
            </DropdownMenu>
            </>
        )
    }
	
}

// {classHealerModules.map(specs => {
// 	const nestedProps2 = {
// 		toggle: <button onClick={this.close} name={name} data-canclick={specs.theDontClick} value={specs.key}>{specs.key}</button>,
// 		animate: false,
// 		leaveTimeout: 1,
// 		delay: 1,
// 	}
// })}

// <NestedDropdownMenu {...nestedProps2}>
// {specs.modules.map(modules=>{
//    return (
//    <li><button onClick={this.close} name={name} value={modules.key}>{modules.key}</button></li>
//    )})}

//    </NestedDropdownMenu> 
  

export default TheVsForm;
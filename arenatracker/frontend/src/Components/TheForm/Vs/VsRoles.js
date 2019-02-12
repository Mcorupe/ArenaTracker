import React from 'react';
import DropdownMenu , { NestedDropdownMenu } from 'react-dd-menu';


const classSpecModules = [
    {
		key: 'Death Knight',
		color: '#C41F3B',
		modules: [
			{key: 'Blood'},
			{key: 'Frost'},
			{key: 'Unholy'}],
	}, {
		key: 'Demon Hunter',
		color: '#A330C9',
		modules: [
			{key: 'Havoc'},
			{key: 'Vengeance'}],
	},{
		key: 'Druid',
		color: '#FF7D0A',
		modules: [
			{key: 'Balance'},
			{key: 'Feral'},
			{key: 'Guardian'},
			{key: 'Restoration'}],
	}, {
		key: 'Hunter',
		color: '#ABD473',
		modules: [
			{key: 'Beastmaster'},
			{key: 'Marksman'},
			{key: 'Survival'}],
	}, {
		key: 'Mage',
		color: '#40C7EB',
		modules: [
			{key: 'Arcane'},
			{key: 'Fire', value: "Fire Mage"},
			{key: 'Frost'}],
	}, {
		key: 'Monk',
		color: '#00FF96',
		modules: [
			{key: 'Brewmaster'},
			{key: 'Mistweaver'},
			{key: 'Windwalker'}],
	}, {
		key: 'Paladin',
		color: '#F58CBA',
		modules: [
			{key: 'Holy'},
			{key: 'Protection'},
			{key: 'Retribution'}],
	}, {
		key: 'Priest',
		color: '#FFFFFF',
		modules: [
			{key: 'Discipline'},
			{key: 'Holy'},
			{key: 'Shadow'}],
	}, {
		key: 'Rogue',
		color: '#FFF569',
		modules: [
			{key: 'Assassination'},
			{key: 'Subtlety'},
			{key: 'Outlaw'}],
	}, {
		key: 'Shaman',
		color: '#0070DE',
		modules: [
			{key: 'Enhancement'},
			{key: 'Elemental'},
			{key: 'Restoration'}],
	}, {
		key: 'Warlock',
		color: '#8787ED',
		modules: [
			{key: 'Affliction'},
			{key: 'Demonology'},
			{key: 'Destruction'}],
	}, {
		key: 'Warrior',
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
         classSpecModules,
         teamComp: "---------------"
        }

    }

    toggle = () => {
        this.setState({ isMenuOpen: !this.state.isMenuOpen });
      }
     
    close = (event) => {
        const { target: {value, name}} = event;
        event.preventDefault();
        this.setState({ isMenuOpen: false, [name]: value });
      }

   
    

    render(){
        const { teamComp } = this.state;
        const menuOptions = {
            isOpen: this.state.isMenuOpen,
            close: this.close,
            toggle: <button type="button" onClick={this.toggle}>{teamComp}</button>,
            align: 'right'
        };

        const nestedProps = {
            toggle: <button type="button" name="nestedDD" onClick={this.toggle}>++++</button>,
            animate: true,
          };
          console.log(this.props)
		  {/* name is passed in   */}
		  return(
            <>
            {this.props.role}
            <DropdownMenu  {...menuOptions}>
				{classSpecModules.map(specs => {
					return (
                        <>
						<li> <button onClick={this.close} name="Dps1" value={specs.key}>{specs.key}</button> </li>
                          {specs.modules.map(modules=>{
							return (
								<NestedDropdownMenu {...nestedProps}>
									<li><button onClick={this.close} name="Dps1" value={modules.key}>{modules.key}</button></li>
								</NestedDropdownMenu>
							)
							})}
						</>
					)
				} )}                            
            </DropdownMenu>
            </>
        )
    }

}

  

export default TheVsForm;
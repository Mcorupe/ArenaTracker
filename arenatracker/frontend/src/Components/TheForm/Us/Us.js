import React from 'react';
import DropdownMenu , { NestedDropdownMenu } from 'react-dd-menu';
import './ddMenu.css';

/*TODO 
1. [X] remake modules   
2. [] fix toggles 
3. [] remake buttons/add dropdown style
4. [] new render()
5. [] make KillTarget list dynamic,
 only allow options from Dps/Dps/Healer to be selections

*/
const classSpecModules = [
    {
        key: 'Any',
		theDontClick: true,
		color: '#C41F3B',
		modules: [],
    },
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
            {key: 'Guardian'},
            {key: 'Resoration'}]
			
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
            {key: 'Mistweaver'},
			{key: 'Windwalker'}],
	}, {
		key: 'Paladin',
		theDontClick: false,
		color: '#F58CBA',
		modules: [
            {key: 'Holy'},
			{key: 'Protection'},
			{key: 'Retribution'}],
	}, {
		key: 'Priest',
		theDontClick: false,
		color: '#FFFFFF',
		modules: [
            {key: 'Discipline'},
			{key: 'Holy'},
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
            {key: 'Enhance'},
            {key: 'Restoration'}],
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


class TheUsForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            killTarget: '',
            dmgTaken:'',
            ccChain: ''
        };
    }

    
toggle = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }
     
close = (event) => {
    const thing = event.target.getAttribute('data-canclick');
    event.preventDefault();
    if ((thing === true || thing === null)){
        const { target: {value}} = event;
        this.setState({ isMenuOpen: false, character: value });   // character: value
        }
    }




render(){
    return(
        <form onSubmit={this.handleSubmit}>
        <br></br>
        <label> US </label>
        <br></br>
        <br></br>
        <label>Kill Target</label>
        <br></br>
            <div className="killTarget">
                <select value={this.state.value} onChange={this.handleChange}>
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

export default TheUsForm;
    
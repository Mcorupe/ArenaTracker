import DropdownMenu from './DdMenu';
import { NestedDropdownMenu } from 'react-dd-menu';


export default DropdownMenu;
export {DropdownMenu};
export {NestedDropdownMenu} from './nestedDdMenu';


import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './App';
import './App.css';


const classSpecModules = [
	{
		key: 'Death Knght',
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
			{key: 'Fire'},
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

ReactDOM.render(<Menu classSpecModules={classSpecModules} />, document.getElementById('Vs'));

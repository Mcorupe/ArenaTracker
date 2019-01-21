import React from 'react';
/* 

Trying to convert someone elses code into something
that i can use for the NestedDropDowns for 
Class/Spec selections for the form.

*/

class theUsForm extends React.Component {
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





function ColorLuminance(hex, lum) {
    // validate hex string
    hex = String(hex).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
      hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
    }
    lum = lum || 0;
  
    // convert to decimal and change luminosity
    var rgb = "#", c, i;
    for (i = 0; i < 3; i++) {
      c = parseInt(hex.substr(i*2,2), 16);
      c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
      rgb += ("00"+c).substr(c.length);
    }
  
    return rgb;
  }
  
  class Module extends React.Component {
    constructor(props) {
      super(props);
      this.toggleHidden = this.toggleHidden.bind(this);
      this.state = {
        isHovered: false
      }
    }
  
    toggleHidden () {
      this.setState({
        isHovered: !this.state.isHovered
      })
    }
      
    render() {
      const styles = {
        'backgroundColor': this.props.lightColor,
      }
      if (this.state.isHovered) {
        styles['backgroundColor'] = this.props.color;
        styles['color'] = 'white';
      }
  
      return (
        <div className='singleModule'
             onMouseEnter={this.toggleHidden}
             onMouseLeave={this.toggleHidden}
             style={styles}>
          {this.props.id}
        </div>
      )
    }
  }
  
  
  class ModuleGroup extends React.Component {
    constructor(props) {
      super(props);
      this.toggleHidden = this.toggleHidden.bind(this);
      this.state = {
        isVisible: false
      }
    }
  
    toggleHidden () {
      this.setState({
        isVisible: !this.state.isVisible
      })
    }
    
    render() {
      const lightBackgroundColor = ColorLuminance(this.props.color, 1.5);
      
      // Only make bg color if on hover
      const bgStyle = {
      }
      if (this.state.isVisible) {
        bgStyle['backgroundColor'] = lightBackgroundColor;
        bgStyle['borderLeft'] = `5px solid ${this.props.color}`;
      }
  
      return (
        <div className='moduleGroup'
             onMouseEnter={this.toggleHidden}
             onMouseLeave={this.toggleHidden}
             style={bgStyle}>
          <i className={`fa ${this.props.icon}`} style={{color: this.props.color}}></i>
          {this.props.id}
          
          <div className={`modulesSet ${this.state.isVisible ? 'visible': ''}`}>
            {this.props.modules.map(module => <Module
                key={module.key}
                id={module.key}
                lightColor={lightBackgroundColor}
                color={this.props.color}
              />)}
          </div>
        </div>
      )
    }
  }
  
  class ModuleGroupSelector extends React.Component {
    constructor(props) {
      super(props);
      this.toggleHidden = this.toggleHidden.bind(this);
      this.state = {
        isVisible: false
      }
    }
  
    toggleHidden () {
      this.setState({
        isVisible: !this.state.isVisible
      })
    }
    
    render() {
      const moduleGroups = this.props.moduleGroups;
      return (
        <div className='Comp' onMouseEnter={this.toggleHidden} onMouseLeave={this.toggleHidden}>
  
          <div className='compButton'>
            Comp
          </div>
          <div className={`compDropDown ${this.state.isVisible ? 'visible': ''}`}>
            {moduleGroups.map(group => <ModuleGroup key={group.key} id={group.key} color={group.color} icon={group.icon} modules={group.modules} />)}
          </div>
        </div>
      )
    }
}


class Menu extends React.Component {
  render() {
    const classSpecModules = this.props.classSpecModules;
    return (
      <div className='navbar'>

        <div className='logo'>
          PlanningTool
        </div>

        <ModuleGroupSelector moduleGroups={classSpecModules} />
      </div>
    )
  }
}
  

export default theUsForm;
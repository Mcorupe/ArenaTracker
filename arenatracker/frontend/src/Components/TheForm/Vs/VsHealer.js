import React from "react";
import DropdownMenu, { NestedDropdownMenu } from "react-dd-menu";
import "./ddMenu.css";

const classHealerModules = [
  {
    key: "Druid",
    theDontClick: false,
    color: "#FF7D0A",
    modules: [{ key: "Restoration Druid" }]
  },
  {
    key: "Monk",
    theDontClick: false,
    color: "#00FF96",
    modules: [{ key: "Mistweaver" }]
  },
  {
    key: "Paladin",
    theDontClick: false,
    color: "#F58CBA",
    modules: [{ key: "Holy Paladin" }]
  },
  {
    key: "Priest",
    theDontClick: false,
    color: "#FFFFFF",
    modules: [{ key: "Discipline" }, { key: "Holy Priest" }]
  },
  {
    key: "Shaman",
    theDontClick: false,
    color: "#0070DE",
    modules: [{ key: "Restoration Shaman" }]
  }
];
const teamCompAuto = [
  {
    key: "Cupid Cleave",
    modules: [
      { dps1: "Retribution" },
      { dps2: "Survival" },
      { healer: "Discipline" }
    ]
  },
  {
    key: "God Comp",
    modules: [{ dps1: "Shadow" }, { dps2: "Frost" }, { healer: "Resto" }]
  },
  {
    key: "KFC",
    modules: [{ dps1: "Arms" }, { dps2: "Beast Master" }, { healer: "Resto" }]
  },
  {
    key: "RMP",
    modules: [{ dps1: "Assassin" }, { dps2: "Frost" }, { healer: "Discipline" }]
  },
  {
    key: "LSD",
    modules: [
      { dps1: "Destruction" },
      { dps2: "Elemental" },
      { healer: "Resto" }
    ]
  },
  {
    key: "LSD2",
    modules: [{ dps1: "Destruction" }, { dps2: "Balance" }, { healer: "Resto" }]
  },
  {
    key: "OwlPlay",
    modules: [{ dps1: "Balance" }, { dps2: "Shadow" }, { healer: "Resto" }]
  },
  {
    key: "Stormrage",
    modules: [{ dps1: "Vengeance" }, { dps2: "Balance" }, { healer: "Resto" }]
  },
  {
    key: "Shatterplay",
    modules: [{ dps1: "Shadow" }, { dps2: "Frost" }, { healer: "Resto" }]
  },
  {
    key: "Thug Cleave",
    modules: [
      { dps1: "Subtlety" },
      { dps2: "Beastmaster" },
      { healer: "Resto" }
    ]
  },
  {
    key: "TSG",
    modules: [{ dps1: "Unholy" }, { dps2: "Arms" }, { healer: "Holy" }]
  },
  {
    key: "Turbo",
    modules: [{ dps1: "Enhance" }, { dps2: "Arms" }, { healer: "Mistweaver" }]
  }
];

class TheVsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classHealerModules,
      teamCompAuto
    };
  }

  /*
TODO:
1. get autofill functionallity
	call componentDidUpdate  or whatever it's depricated to
	pass in parameters		//prevstate, prevprops
	if (this.props.selectedTeamComp === cupicCleave && this.props.name === dps1)      //leaves undefined 
*/

  componentDidUpdate(prevState, prevProps) {
    if (this.props.TeamComp === "Cupid Cleave") {
      //fucka youa updatea
      console.log(`prevProps: ${prevProps}`);
      this.fetchData(this.state.teamCompAuto);
    }
  }

  toggle = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };

  close = event => {
    const thing = event.target.getAttribute("data-canclick");
    event.preventDefault();
    if (thing === true || thing === null) {
      const {
        target: { value }
      } = event;
      this.setState({ isMenuOpen: false, character: value }); // character: value
    }
  };

  render() {
    const { name } = this.props;
    //const { dmg, healer } = this.state;
    const { character } = this.state;

    const menuOptions2 = {
      isOpen: this.state.isMenuOpen,
      close: this.close,
      toggle: (
        <button type="button" onClick={this.toggle}>
          {character ? character : name}
        </button>
      ),
      align: "right"
    };

    return (
      <>
        <DropdownMenu {...menuOptions2}>
          {classHealerModules.map(specs => {
            const nestedProps2 = {
              toggle: (
                <button
                  onClick={this.close}
                  name={name}
                  data-canclick={specs.theDontClick}
                  value={specs.key}
                >
                  {specs.key}
                </button>
              ),
              animate: false,
              leaveTimeout: 1,
              delay: 1
            };

            return (
              <>
                <NestedDropdownMenu {...nestedProps2}>
                  {specs.modules.map(modules => {
                    return (
                      <li>
                        <button
                          onClick={this.close}
                          name={name}
                          value={modules.key}
                        >
                          {modules.key}
                        </button>
                      </li>
                    );
                  })}
                </NestedDropdownMenu>
              </>
            );
          })}
        </DropdownMenu>
      </>
    );
  }
}

export default TheVsForm;

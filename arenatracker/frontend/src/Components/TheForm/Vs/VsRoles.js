import React from "react";
import DropdownMenu, { NestedDropdownMenu } from "react-dd-menu";
import "./ddMenu.css";
import { AutoFill } from "../AutoFill";

const classDmgModules = [
  {
    key: "Death Knight",
    theDontClick: false,
    color: "#C41F3B",
    modules: [{ key: "Blood" }, { key: "Frost" }, { key: "Unholy" }]
  },
  {
    key: "Demon Hunter",
    theDontClick: false,
    color: "#A330C9",
    modules: [{ key: "Havoc" }, { key: "Vengeance" }]
  },
  {
    key: "Druid",
    theDontClick: false,
    color: "#FF7D0A",
    modules: [{ key: "Balance" }, { key: "Feral" }, { key: "Guardian" }]
  },
  {
    key: "Hunter",
    theDontClick: false,
    color: "#ABD473",
    modules: [{ key: "Beastmaster" }, { key: "Marksman" }, { key: "Survival" }]
  },
  {
    key: "Mage",
    theDontClick: false,
    color: "#40C7EB",
    modules: [{ key: "Arcane" }, { key: "Fire" }, { key: "Frost" }]
  },
  {
    key: "Monk",
    theDontClick: false,
    color: "#00FF96",
    modules: [{ key: "Brewmaster" }, { key: "Windwalker" }]
  },
  {
    key: "Paladin",
    theDontClick: false,
    color: "#F58CBA",
    modules: [{ key: "Protection" }, { key: "Retribution" }]
  },
  {
    key: "Priest",
    theDontClick: false,
    color: "#FFFFFF",
    modules: [{ key: "Shadow" }]
  },
  {
    key: "Rogue",
    theDontClick: false,
    color: "#FFF569",
    modules: [{ key: "Assassination" }, { key: "Subtlety" }, { key: "Outlaw" }]
  },
  {
    key: "Shaman",
    theDontClick: false,
    color: "#0070DE",
    modules: [{ key: "Elemental" }, { key: "Enhance" }]
  },
  {
    key: "Warlock",
    theDontClick: false,
    color: "#8787ED",
    modules: [
      { key: "Affliction" },
      { key: "Demonology" },
      { key: "Destruction" }
    ]
  },
  {
    key: "Warrior",
    theDontClick: false,
    color: "#C79C6E",
    modules: [{ key: "Arms" }, { key: "Fury" }, { key: "Protection" }]
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
      classDmgModules,
      teamCompAuto
    };
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (this.props.selectedTeamComp !== prevProps.selectedTeamComp) {
      this.autofiller();
    }
  }

  autofill = event => {
    const {
      teamCompAuto: { key, modules }
    } = event;
    const { dps1, dps2, healer } = this.state;
    event.preventDefault();
    this.setState({ [key]: modules });
  };

  autofiller = () => {
    const autofiller = AutoFill(this.props.selectedTeamComp, this.props.name);
    console.log(autofiller);
    this.setState({ character: autofiller });
  };

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
      this.setState({ isMenuOpen: false, character: value });
    }
  };

  render() {
    const { name } = this.props;
    const { character } = this.state;
    const menuOptions = {
      isOpen: this.state.isMenuOpen,
      close: this.close,
      toggle: (
        <button type="button" onClick={this.toggle}>
          {name === "Dps1" ? "Dmg": name === "Dps2" ? "Dmg": name === "Healer" ? "Healer" : name}
        </button>
      ),
      align: "right",
      closeOnOutsideClick: true
    };

    return (
      <>
        <DropdownMenu {...menuOptions}>
          {classDmgModules.map(specs => {
            const nestedProps1 = {
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
                <NestedDropdownMenu {...nestedProps1}>
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

import React from "react";
import DropdownMenu from "react-dd-menu";
import VsRoles from "./VsRoles";
import VsHealer from "./VsHealer";
import AutoFill from "../AutoFill/AutoFill";

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
    modules: [{ dps1: "Unholy" }, { dps2: "Arms" }, { healer: "Holy Paladin" }]
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
      enemyComp: "Enemy Comp",
      teamComp: "Team Comp",
      teamCompAuto,
      enemyCompOpen: false,
      teamCompOpen: false
    };
  }

  toggle = event => {
    const {
      target: { name }
    } = event;
    this.setState({ [name]: !this.state[name] });
  };

  close = event => {
    const {
      target: { value, name }
    } = event;
    event.preventDefault();
    this.setState({ [name]: value });
    if (name === "teamComp") {
      this.setState({ teamCompOpen: false });
    } else {
      this.setState({ enemyCompOpen: false });
    }
  };

  autofill = (event) => {
      const {teamCompAuto: {key, modules}} = event;
      const {dps1, dps2, healer} = this.state;
      event.preventDefault();
      this.setState({ [key]:modules});
  }

  render() {
    const { teamComp, enemyComp } = this.state;
    const menuOptions = {
      isOpen: this.state.teamCompOpen,
      close: this.close,
      toggle: (
        <button type="button" name="teamCompOpen" onClick={this.toggle}>
          {teamComp}
        </button>
      ),
      align: "right",
      closeOnOutsideClick: true
    };
    const menuOptions2 = {
      isOpen: this.state.enemyCompOpen,
      close: this.close,
      toggle: (
        <button type="button" name="enemyCompOpen" onClick={this.toggle}>
          {enemyComp}
        </button>
      ),
      align: "right",
      closeOnOutsideClick: true
    };
    return (
      <form onSubmit={this.handleSubmit}>
        <br />
        <div className="comps">
          <DropdownMenu {...menuOptions} value={this.state.value}>
            <li>
              {" "}
              <button onClick={this.close} name="teamComp" value="Variant">
                Variant/Hybrid
              </button>
            </li>
            <li>
              {" "}
              <button onClick={this.close} name="teamComp" value="Cupid Cleave">
                Cupid Cleave
              </button>
            </li>{" "}
            <li>
              {" "}
              <button onClick={this.close} name="teamComp" value="God Comp">
                God Comp
              </button>
            </li>{" "}
            <li>
              {" "}
              <button onClick={this.close} name="teamComp" value="KFC">
                KFC
              </button>
            </li>{" "}
            <li>
              {" "}
              <button onClick={this.close} name="teamComp" value="RMP">
                RMP
              </button>
            </li>{" "}
            <li>
              {" "}
              <button onClick={this.close} name="teamComp" value="LSD">
                LSD
              </button>
            </li>{" "}
            <li>
              {" "}
              <button onClick={this.close} name="teamComp" value="LSD2">
                LSD2
              </button>
            </li>{" "}
            <li>
              {" "}
              <button onClick={this.close} name="teamComp" value="OwlPlay">
                OwlPlay
              </button>
            </li>{" "}
            <li>
              {" "}
              <button onClick={this.close} name="teamComp" value="Stormrage">
                Stormrage
              </button>
            </li>{" "}
            <li>
              {" "}
              <button onClick={this.close} name="teamComp" value="Shatterplay">
                Shatterplay
              </button>{" "}
            </li>{" "}
            <li>
              {" "}
              <button onClick={this.close} name="teamComp" value="Thug Cleave">
                Thug Cleave
              </button>
            </li>{" "}
            <li>
              {" "}
              <button onClick={this.close} name="teamComp" value="TSG">
                TSG
              </button>
            </li>{" "}
            <li>
              {" "}
              <button onClick={this.close} name="teamComp" value="Turbo Cleave">
                Turbo Cleave
              </button>
            </li>{" "}
          </DropdownMenu>
        </div>
        <br />
        <br />
        <VsRoles
          autofill={teamCompAuto.modules}
          selectedTeamComp={this.state.teamComp}
          name="Dps1"
        />
        <VsRoles
          autofill={teamCompAuto.modules}
          selectedTeamComp={this.state.teamComp}
          name="Dps2"
        />
        <VsHealer
          autofill={teamCompAuto.modules}
          selectedTeamComp={this.state.teamComp}
          name="Healer"
        />
        <br />
        <br />
        <text> VS </text>
        <br />
        <br />

        <div className="comps">
          <DropdownMenu {...menuOptions2} value={this.state.value}>
            <li>
              {" "}
              <button onClick={this.close} name="teamComp" value="Variant">
                Variant/Hybrid
              </button>
            </li>
            <li>
              {" "}
              <button
                onClick={this.close}
                name="enemyComp"
                value="Cupid Cleave"
              >
                Cupid Cleave
              </button>
            </li>{" "}
            <li>
              {" "}
              <button onClick={this.close} name="enemyComp" value="God Comp">
                God Comp
              </button>
            </li>{" "}
            <li>
              {" "}
              <button onClick={this.close} name="enemyComp" value="KFC">
                KFC
              </button>
            </li>{" "}
            <li>
              {" "}
              <button onClick={this.close} name="enemyComp" value="RMP">
                RMP
              </button>
            </li>{" "}
            <li>
              {" "}
              <button onClick={this.close} name="enemyComp" value="LSD">
                LSD
              </button>
            </li>{" "}
            <li>
              {" "}
              <button onClick={this.close} name="enemyComp" value="LSD2">
                LSD2
              </button>
            </li>{" "}
            <li>
              {" "}
              <button onClick={this.close} name="enemyComp" value="OwlPlay">
                OwlPlay
              </button>
            </li>{" "}
            <li>
              {" "}
              <button onClick={this.close} name="enemyComp" value="Stormrage">
                Stormrage
              </button>
            </li>{" "}
            <li>
              {" "}
              <button onClick={this.close} name="enemyComp" value="Shatterplay">
                Shatterplay
              </button>{" "}
            </li>{" "}
            <li>
              {" "}
              <button onClick={this.close} name="enemyComp" value="Thug Cleave">
                Thug Cleave
              </button>
            </li>{" "}
            <li>
              {" "}
              <button onClick={this.close} name="enemyComp" value="TSG">
                TSG
              </button>
            </li>{" "}
            <li>
              {" "}
              <button
                onClick={this.close}
                name="enemyComp"
                value="Turbo Cleave"
              >
                Turbo Cleave
              </button>
            </li>{" "}
          </DropdownMenu>
        </div>
        <br />
        <br />
        <VsRoles
          autofill={enemyComp}
          selectedTeamComp={this.state.enemyComp}
          name="Dps1"
        />
        <VsRoles
          autofill={enemyComp}
          selectedTeamComp={this.state.enemyComp}
          name="Dps2"
        />
        <VsHealer
          autofill={enemyComp}
          selectedTeamComp={this.state.enemyComp}
          name="Healer"
        />
      </form>
    );
  }
}

export default TheVsForm;

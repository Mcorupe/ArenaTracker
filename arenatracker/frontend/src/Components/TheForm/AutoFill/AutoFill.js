import React from "react";

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
//orchistrator function
const AutoFill = (key, modules) => {
  switch (key) {
    case "Team Comp":
      return;
    case "Cupid Cleave":
      switch (modules) {
        case "Dps1":
          return "Retribution";
        case "Dps2":
          return "Survival";
        case "Healer":
          return "Discipline";
        }
        break;
    case "God Comp":
        switch (modules) {
          case "Dps1":
            return "Shadow";
          case "Dps2":
            return "Frost";
          case "Healer":
            return "Restoration Druid";
          }
          break;
    case "KFC":
        switch (modules) {
          case "Dps1":
            return "Arms";
          case "Dps2":
            return "Beast Master";
          case "Healer":
            return "Restoration Druid";
          }
          break;
    case "RMP":
        switch (modules) {
          case "Dps1":
            return "Assassin";
          case "Dps2":
            return "Frost";
          case "Healer":
            return "Discipline";
          }
          break;
    case "LSD":
        switch (modules) {
          case "Dps1":
            return "Destruction";
          case "Dps2":
            return "Elemental";
          case "Healer":
            return "Restoration Druid";
          }
          break;
    case "LSD2":
        switch (modules) {
          case "Dps1":
            return "Destruction";
          case "Dps2":
            return "Balance";
          case "Healer":
            return "Restoration Shaman";
          }
          break;
     case "OwlPlay":
        switch (modules) {
          case "Dps1":
            return "Balance";
          case "Dps2":
            return "Shadow";
          case "Healer":
            return "Restoration Shaman";
          }
          break;
      case "Stormrage":
        switch (modules) {
          case "Dps1":
            return "Vengeance";
          case "Dps2":
            return "Balance";
          case "Healer":
            return "Restoration Shaman";
          }
          break;
     case "Shatterplay":
        switch (modules) {
          case "Dps1":
            return "Shadow";
          case "Dps2":
            return "Frost";
          case "Healer":
            return "Restoration Druid";
          }
          break;
    case "Thug Cleave":
        switch (modules) {
          case "Dps1":
            return "Subtlety";
          case "Dps2":
            return "Beastmaster";
          case "Healer":
          return "Restoration Druid";
        }
        break;
     case "TSG":
        switch (modules) {
          case "Dps1":
            return "Unholy";
          case "Dps2":
            return "Arms";
          case "Healer":
            return "Holy Paladin";
          }
          break;
    case "Turbo":
        switch (modules) {
          case "Dps1":
            return "Enhance";
          case "Dps2":
            return "Arms";
          case "Healer":
            return "Mistweaver";
          }
          break;          
  }
};

// const AutoFill = (teamCompAuto) => {    //taking teamcompauto as props
//     return (
//         <div className="autofill">

//         </div>
//     )
// };

export default AutoFill;

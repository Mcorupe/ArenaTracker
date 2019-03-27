import React from "react";

// this data needs to draw from the DB
// needs to query for killtarget/ccChain

class PopularChoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      killtarget: "",
      ccChain: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      killtarget: event.target.value1,
      ccChain: event.target.value2
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>PopularChoice</label>
      </form>
    );
  }
}
export default PopularChoice;

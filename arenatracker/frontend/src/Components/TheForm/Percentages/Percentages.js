import React from "react";

// this data needs to draw from the DB
// needs to query for {win}{loss}

class Percentages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      winPercent: "",
      lossPercent: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      winPercent: event.target.value,
      lossPercent: event.target.value
    });
  }

  render() {
    return (
      <form>
        <label>W% L%</label>
      </form>
    );
  }
}

export default Percentages;

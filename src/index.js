import React, {Component} from "react";
import ReactDOM from "react-dom";

import Dropdown from "./components/country_dropdown";

const axios = require("axios");

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locations: []
    };
  }

  componentDidMount() {
    axios.get("./resources/and_locations.js").then(locations => {
      this.setState({locations: locations});
    });
  }

  render() {
    return (
      <div>
        <Dropdown locations={this.state.locations} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));

import { Component } from "react";
import "./Table.css"
class Table extends Component {

  constructor(props) {
    super(props);
    this.state = { count: 0 }
  }
  increment = () => {
    this.setState({ count: this.state.count + 10 })
  }
  dicrement = () => {
    this.setState({ count: this.state.count - 10 })
  }

  reset = () => {
    this.setState({ count: 0  })
  }

  render() {
    return (
      <div>
        <h1>Count : {this.state.count}</h1>
        <button className="Button" type="button" onClick={this.increment}>increment</button>
        <button className="Button" type="button" onClick={this.dicrement}>dicrement</button>
        <button className="Button" type="button" onClick={this.reset}>reset</button>
      </div>
    )

  }
}
export default Table;
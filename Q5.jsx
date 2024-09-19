class Count extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleAddCount = this.handleAddCount.bind(this);
  }

  handleAddCount() {
    // The problem: Calling setState multiple times in a row can lead to batched updates,
    // potentially resulting in only one update being applied.
    // This is because React may batch multiple setState calls for performance reasons.
    // Note: This approach may not reliably increment the count by 3 as intended.
    // For more predictable behavior, consider using the functional form of setState.
    // The solution: Use the functional form of setState to ensure each update is based on the latest state.
    this.setState((prevState) => ({ count: prevState.count + 1 }));
    this.setState((prevState) => ({ count: prevState.count + 1 }));
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleAddCount}>Add</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Count />,
  document.getElementById('root')
);

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    // Setting up component's state
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    const countFromLocalStorage = parseInt(localStorage.getItem('count'), 10);

    if (!isNaN(countFromLocalStorage)) {
      this.setState(() => ({ count: countFromLocalStorage }));
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.count != this.state.count) {
      localStorage.setItem('count', this.state.count);
    }
  }

  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }

  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }

  handleReset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}> -1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }

}

ReactDOM.render(<Counter />, document.getElementById('app'));

// const appRoot = document.getElementById('app');

// let count = 0;

// function addOne() {
//   count++;
//   renderCounterApp();
// }

// function minusOne() {
//   count--;
//   renderCounterApp();
// }

// function reset() {
//   count = 0;
//   renderCounterApp();
// }

// function renderCounterApp() {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
  
//   ReactDOM.render(templateTwo, appRoot);
// }

// renderCounterApp();
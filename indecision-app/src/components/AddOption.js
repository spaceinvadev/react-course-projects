import React from 'react';

export default class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
    this.state = { error: null };
  }

  handleFormSubmission(e) {
    e.preventDefault();
  
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleFormSubmission}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}
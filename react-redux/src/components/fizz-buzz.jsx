import React from 'react';

class FizzBuzzComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Fizz-Buzz - React-Redux</h2>
        <form className="form-inline" onSubmit={(e) => this.props.handleSubmit(e, this.props.max, this.props.fizz, this.props.buzz)} >
          <div className="form-group">
            <label>Max:</label>
            1-<input type="number" className="form-control" value={this.props.max} onChange={(e) => this.props.handleChange(e.target.value, this.props.fizz, this.props.buzz)} />
          </div>
          <div className="form-group">
            <label>Fizz Value:</label>
            <input type="number" className="form-control" value={this.props.fizz} onChange={(e) => this.props.handleChange(this.props.max, e.target.value, this.props.buzz)} />
          </div>
          <div className="form-group">
            <label>Buzz Value:</label>
            <input type="number" className="form-control" value={this.props.buzz} onChange={(e) => this.props.handleChange(this.props.max, this.props.fizz, e.target.value)} />
          </div>
          <input type="submit" className="btn btn-default" value="Calc" />
        </form>
        <br/>
        <ul>
        {this.props.list.map((result, index) => {
          return <li key={index}><span>{result.value}</span></li>;
        })}
        </ul>
      </div>
    )
  }
}

export default FizzBuzzComponent;

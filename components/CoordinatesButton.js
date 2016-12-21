const React = require('react');

class CoordinatesButton extends React.Component{
  constructor(onReceiveCoordinates) {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    var ary = []
    var x = event.clientX;
    var y = event.clientY;
    ary.push(x)
    ary.push(y)
    this.props.onReceiveCoordinates(ary)
  }
  render(){
    return(
      <button onClick={this.handleClick}>Click me!</button>
    )
  }
}

module.exports = CoordinatesButton

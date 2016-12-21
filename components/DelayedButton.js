const React = require('react');

class DelayedButton extends React.Component{
  constructor(onDelayedClick, delay){
    super();
    this.handleClick = this.handleClick.bind(this);
  }
    handleClick(event){
      event.persist();
      setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
    }
  render(){
    return(
      <button onClick={this.handleClick}>Click me!</button>
    )
  }
}
module.exports = DelayedButton

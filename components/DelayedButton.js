class DelayedButton extends React.Component{
  constructor(onDelayedClick, delay){
    super();
    this.handleClick = this.handleClick.bind(this);
  }
    handleClick(event){
      setTimeout(this.props.onDelayedClick(), this.props.delay)
    }
  render(){
    return(
      <button onClick={this.handleClick}>Click me!</button>
    )
  }
}
module.exports = DelayedButton

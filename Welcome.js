import * as React from 'react';

class Welcome extends React.Component{
  constructor(){
    super()
    this.state = {
      count : 0
    }
    this.decrementHandler = this.decrementHandler.bind(this);
  }
incrementHandler(){
  this.setState({
    count: this.state.count+1
  })
}
decrementHandler(){
  this.setState({
    count: this.state.count-1
  })
}
  render(){
    return( 
    <div>
    <h2>{this.state.count}</h2>
    <button onClick={()=>this.incrementHandler()}>Increment</button><br/><br/>
    <button onClick={this.decrementHandler}>Decrement</button>
    </div>
    )
  }
}

export default Welcome;
import React,{Component} from "react";
class App extends Component{
  
  state={
    userName:"sam",
    passWord:123
  }
  render()
  {
    return(
      <>
      <h1>{this.state.userName}</h1>
      <h2>{this.state.passWord}</h2>
      </>
    )
  }
}
export default App;
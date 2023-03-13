import React,{Component} from "react";
 class App extends Component{
  state={
    userName:"sam"
  }
render()
{
  return(
    <h1>{this.state.userName}</h1>
  )
}

 }
 export default App;
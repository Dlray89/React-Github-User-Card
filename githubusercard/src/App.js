import React from "react";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super()
    
    this.state({
      user: [],
      userinfo:[]
    })
  }
  

  componentDidMount() {
axios
.get("https://api.github.com/users/Dlray89")
.then( res => {
  this.state({
    user:[],
    userinfo:[]
  })
})
.catch(err => console.log("Something happen", err))   

}

render() {
  return(
    <div>
      <h1>Hello</h1>
    </div>
  )


  }
}
export default App;
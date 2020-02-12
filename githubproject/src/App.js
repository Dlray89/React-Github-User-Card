import React from "react";
import axios from "axios";
import FollowersList from "./components/followerslist";
import "./App.css";


class App extends React.Component{
  constructor(props){
    console.log('COnstructor rendering.......')
    super(props);
    this.state=({ 
      user: [],
     })
  }

componentDidMount(){
  axios
  .get('https://api.github.com/users/Dlray89')
  .then(response => {
    this.setState({
      user: response.data
    })
  })
  .catch( error => console.log("an Error has happen", error))
  
}


  render() {
    console.log("i am rendering......")
    return(
      <div>
      <div className="dapsCard" key={this.state.user.id}>
        <h1>{this.state.user.name}</h1>
        <p>Followers: {this.state.user.followers} /
        Following: {this.state.user.following}</p>
        <img width="200px" src={this.state.user.avatar_url} alt="Picture of David"/>
        <p>Location: {this.state.user.location} <br />Github Handle: {this.state.user.login} <br/>{this.state.user.bio} 
        <br /> Website: {this.state.user.blog} <br />
        CEO of: {this.state.user.company}</p>
        <button className="dapbtn"><a className="daplink" href={this.state.user.html_url} style={{textDecorationColor: 'white'}}  target="_blank">Profile</a></button>
            
        </div>
        <FollowersList />
      </div>
    )
  }
}
export default App;
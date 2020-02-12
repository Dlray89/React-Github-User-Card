import React from "react";
import axios from "axios";
import Styled from "styled-components";

const StyledMContainer = Styled.div `
margin-bottom: 5%;
`


const StyledContainer = Styled.div `
display: flex;
justify-content: space-around;
background: linear-gradient(to left, #870000, #190a05);
padding:3%;
border-radius: 20px;
margin: 0 auto;
width: 60%;
`

class FollowersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followers: []
    };
  }
  componentDidMount() {
    axios
      .get("https://api.github.com/users/Dlray89/followers")
      .then(response => {
        this.setState({
          followers: response.data
        });
      })
      .catch(error => console.log("something wrong with the list", error));
  }
  render() {
    return (
        <StyledMContainer>
        <h1>GitHub Friends</h1>
      <StyledContainer>
     
        {this.state.followers.map(follower => (
          <div key={follower.node_id}>
            {follower.login} <br />
            <img
              width="100"
              src={follower.avatar_url}
              alt="Pictures of followers"
            />
            <br />
            <button>
              <a href={follower.html_url} target="_blank">
                Profile Page
              </a>
            </button>{" "}
            <br />
          </div>
        ))}
      </StyledContainer>
      </StyledMContainer>
    );
  }
}
export default FollowersList;

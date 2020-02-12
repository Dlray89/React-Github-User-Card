import React from "react";
import axios from "axios";
import Styled from "styled-components";

const StyledMContainer = Styled.div`
margin-bottom: 5%;
`;

const StyledContainer = Styled.div`
display: flex;
justify-content: space-around;
background: linear-gradient(to left, #870000, #190a05);
padding:3%;
border-radius: 20px;
margin: 0 auto;
width: 60%;
`;
const StyledButton = Styled.button`
background: linear-gradient(to right, #000000, #434343); 
color: #870000;
width: 95%;
padding: 6%;
`;
const StyledLink = Styled.a `
text-decoration: none;
color: #f8b500;
font-size: 15px;
`

const Styledh1 = Styled.h1 `
color: #870000;
font-size: 35px;
`

const StyledName = Styled.p `
color: #f8b500;
font-size:18px;
border-radius: 10px;
background: linear-gradient(to right, #000000, #434343);
padding: 5%;
width: 100%;
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
        <Styledh1 >GitHub Friends</Styledh1>
        <StyledContainer>
          {this.state.followers.map(follower => (
            <div key={follower.node_id}>
             <StyledName>{follower.login}</StyledName>  <br />
              <img
                width="100"
                src={follower.avatar_url}
                alt="Pictures of followers"
              />
              <br />
              <StyledButton>
                < StyledLink 
                className="followers"
                  href={follower.html_url}
                  rel="noopener noreferrer"
                  target="_blank"
                  
                >
                  Profile
                </StyledLink>
              </StyledButton>{" "}
              <br />
            </div>
          ))}
        </StyledContainer>
      </StyledMContainer>
    );
  }
}
export default FollowersList;

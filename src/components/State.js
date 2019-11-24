import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const Subwrap = styled.div`
  width: 100%;
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  margin: 20px 14px 5px 68px;
  background-color: #fafafa;
  border-radius: 3%;
  max-height: 283px;
`;

const Cardstate = styled.div`
  width: 20%;
  border-radius: 3%;

  height: 283px;
  width: 209px;
  border: 2px solid green;
`;

const Addstate = styled.div`
  margin: 20px 14px 5px 68px;
  background-color: #fafafa;
  border-radius: 3%;
  border: 2px solid green;
  max-height: 283px;
  height: 283px;
  width: 209px;
`;

const Inputstate = styled.input`
  margin-top: 78px;
  margin-left: 38px;
`;
const Inputstatebutton = styled.input`
  margin-top: 10px;
  margin-left: 160px;
`;
const Name = styled.h3`
  margin-left: 20px;
`;

export default class State extends Component {
  state = {
    states: [
      {
        name: "Delhi"
      },
      {
        name: "gurgaon"
      },
      {
        name: "chandigarh"
      }
    ]
  };
  render() {
    return (
      <Wrapper>
        <Addstate>
          <Inputstate type="text" placeholder="add state" />
          <Inputstatebutton type="button" value="add" />
        </Addstate>
        <Subwrap>
          {this.state.states.map((it, index) => {
            return (
              <Card>
                <Cardstate>
                  <Name>{it.name}</Name>
                </Cardstate>
              </Card>
            );
          })}
        </Subwrap>
      </Wrapper>
    );
  }
}

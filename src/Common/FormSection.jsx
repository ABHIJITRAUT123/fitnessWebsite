import React from "react";
import styled from "styled-components";

var SectionWrap = styled.form`
margin-top: 75px;
margin-bottom: 50px;`

var Title = styled.h1`
color: white;`

var SubTitle = styled.p`
color: white;
margin-bottom: 50px;`

const Input = styled.input`
  margin-top: 5px;
  margin-bottom: 25px;
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid #fff;
  color: #fff;
  padding-bottom: 10px;

  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    color: #f0f0f0;
    background: transparent;
    border: none;
  }
  @media screen and (min-width: 768px) {
    margin-top: 0px;
  }
`;


export default function FormSection(){
    return(
        <>
        <SectionWrap className="container">
            <div className="col-lg-10 offset-lg-1 px-lg-5">
                <Title>Let's Get Moving</Title>
                <SubTitle>Sign Up For Updates</SubTitle>
                <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="name">Full Name</label>
                            <Input type="text" name="name" id="name"></Input>
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="email">Email</label>
                            <Input type="text" name="email" id="email"></Input>
                        </div>
                </div>

                <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="phone">Phone No.</label>
                            <Input type="text" name="phone" id="phone"></Input>
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="location">Location</label>
                            <Input type="text" name="location" id="location"></Input>
                        </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                            <label htmlFor="message">Message</label>
                            <textarea type="text" name="message" id="message" cols="30" rows="4"></textarea>
                    </div>

                    <div className="col-md-6 mt-5">
                        <input type="submit" name="submit" id="submit"></input>
                    </div>
                </div>
            </div>
        </SectionWrap>
        </>
    )
}
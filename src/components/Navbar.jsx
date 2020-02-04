import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../assetts/logo.JPG";
import styled from "styled-components";
import {ButtonContainer} from './Button'

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm px-sm-5">
        <Link to="/">
          <BrandLogo src={logo} alt="" className="navbar-brand" />
        </Link>
        <div>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
              <Link to="/" className="nav-link">
                Products
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus"></i>
            </span>
            cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const BrandLogo = styled.img`
  width: 40px;
  border-radius: 10px;
`;

const NavWrapper = styled.nav`
background:#2B3175;
.nav-link{
  color: white;
  font-size:1.3rem;
  text-transform:capitalize;
}
`;



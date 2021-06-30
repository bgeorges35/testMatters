import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import logo from "../Assets/logo.png";

const Header = () => {
  return (
    <HeaderStyle>
      <Link
        to={{
          pathname: `/`,
        }}
      >
        <Logo src={logo} alt="logo"></Logo>
      </Link>
    </HeaderStyle>
  );
};

const Logo = styled.img`
  max-width: 7%;
  height: auto;
`;

const HeaderStyle = styled.div`
  background-color: #35d883;
  text-align: center;
`;

export default Header;

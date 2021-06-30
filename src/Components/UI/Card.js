import React from "react";
import styled, { css } from "styled-components";

const Card = ({ img, name }) => {
  return <CardStyle img={img}>{name}</CardStyle>;
};

const CardStyle = styled.div(
  ({ img }) => css`
    height: 100%;
    background-image: url(${img});
    background-size: cover;
    transition: 0.1s;
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.4);
    color: white;
    text-align: center;
    font-size: x-large;
    border-radius: 20px;
    &:hover {
      opacity: 0.7;
      transform: scale(1.05);
    }
  `
);

export default Card;

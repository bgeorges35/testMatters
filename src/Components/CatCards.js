import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./UI/Card";
import { Link } from "react-router-dom";

const CatCards = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    fetch("https://europe-west1-matters-test.cloudfunctions.net/getCats")
      .then((response) => response.json())
      .then((data) => setCats(data));
  }, []);

  return (
    <CardsStyle>
      {cats.map((cat) => (
        <NavLink
          to={{
            pathname: `${cat.id}`,
            state: cat,
          }}
        >
          <Card key={cat.id} img={cat.picturePath} name={cat.name}></Card>
        </NavLink>
      ))}
    </CardsStyle>
  );
};

const CardsStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(var(--auto-grid-min-size, 14rem), 1fr)
  );
  gap: 2%;
  margin: 2%;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  height: 300px;
`;

export default CatCards;

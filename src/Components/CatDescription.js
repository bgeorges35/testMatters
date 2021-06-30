import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./UI/Card";
import AppointmentModal from "./AppointmentModal";
import { useLocation } from "react-router-dom";

const CatDescription = () => {
  const cat = useLocation().state;
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Descriptionstyle>
        <ImageStyle src={cat.picturePath} />
        <InformationStyle>
          <h1>{cat.name}</h1>
          <p>BirthdayDate: {cat.birthdate}</p>
          <p>Type: {cat.breed}</p>
          <p>Gender: {cat.gender}</p>
          <p>Location: {cat.location}</p>
          <Button onClick={() => setShowModal(true)}>
            Make an appointment to adopt
          </Button>
        </InformationStyle>
      </Descriptionstyle>
      <AppointmentModal
        show={showModal}
        id={cat.id}
        location={cat.location}
        onClose={() => {
          setShowModal(false);
        }}
      />
    </>
  );
};

const Descriptionstyle = styled.div`
  margin: 2% 6%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: large;
  flex-wrap: wrap;
`;

const InformationStyle = styled.div``;

const ImageStyle = styled.img`
  height: 40vw;
`;

const Button = styled.button`
  cursor: pointer;
  padding: 0.3em 1.2em;
  border-radius: 20px;
  margin: 1%;
  background-color: #35d883;
  text-decoration: none;
  border: none;
  &:hover {
    opacity: 0.8;
    transform: scale(1.05);
  }
`;

export default CatDescription;

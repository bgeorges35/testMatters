import React, { useEffect, useState } from "react";
import styled from "styled-components";

const AppointmentModal = (props) => {
  if (props.show === false) {
    return null;
  }
  const [appointmentDate, setAppointmentDate] = useState(new Date());

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({ catId: Number(props.id) }),
    };
    fetch(
      `https://europe-west1-matters-test.cloudfunctions.net/getAdoptionAppointment`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setAppointmentDate(new Date(data.appointment));
      });
  }, []);

  return (
    <BackgroundStyle>
      <ModalStyle>
        <CloseModal onClick={props.onClose}>X</CloseModal>
        <h1>Congratulation !</h1>
        <p>
          Let's meet at {props.location} the
          {" " + appointmentDate.toLocaleString("fr-FR")}
        </p>
      </ModalStyle>
    </BackgroundStyle>
  );
};

const BackgroundStyle = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalStyle = styled.div`
  background-color: white;
  padding: 1% 1% 5% 1%;
  text-align: center;
  border-radius: 20px;
`;

const CloseModal = styled.a`
  float: right;
  width: 32px;
  height: 32px;
  opacity: 0.3;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

export default AppointmentModal;

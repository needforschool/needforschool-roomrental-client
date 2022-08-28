import RentalList from "@components/Admin/Rental/List";
import { getRentals } from "@services/api";
import { Rental } from "@typeDefs/main";
import { NextPage } from "next";
import React from "react";
import styled from "styled-components";

const Admin: NextPage = () => {
  // get all rentals to display them on the page

  const [rentals, setRentals] = React.useState<Rental[] | undefined>(undefined);

  const initRentals = async () => {
    setRentals(await getRentals());
  };

  React.useEffect(() => {
    initRentals();
  }, []);

  console.log(rentals);

  if (rentals && rentals.length > 0)
    return <RentalList rentals={rentals} setRentals={setRentals} />;

  return (
    <Container>{"Il n'y a pas encore de location enregistrée."}</Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
`;

export default Admin;

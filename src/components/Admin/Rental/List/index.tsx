import { Rental } from "@typeDefs/main";
import styled from "styled-components";
import Card from "./Card";

interface Props {
  rentals: Rental[];
  setRentals: React.Dispatch<React.SetStateAction<Rental[] | undefined>>;
}

const RentalList: React.FC<Props> = ({ rentals, setRentals }: Props) => {
  return (
    <Container>
      <Row>
        {rentals.map((rental, i) => {
          return <Card key={i} rental={rental} setRentals={setRentals} />;
        })}
      </Row>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-left: -10px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export default RentalList;

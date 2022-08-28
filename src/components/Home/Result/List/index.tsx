import Button from "@components/Layout/Button";
import { Room } from "@typeDefs/main";
import styled from "styled-components";
import Card from "./Card";

interface Props {
  setRooms: React.Dispatch<React.SetStateAction<Room[] | undefined>>;
  rooms: Room[];
  values: any;
}

const ResultList: React.FC<Props> = ({ rooms, values, setRooms }: Props) => {
  return (
    <Container>
      <Row>
        {rooms.map((room, i) => {
          return <Card key={i} room={room} values={values} />;
        })}
      </Row>
      <SearchButton
        onClick={() => {
          setRooms(undefined);
        }}
      >
        {"Retour à la recherche"}
      </SearchButton>
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

const SearchButton = styled(Button)`
  margin-top: 20px;
`;

export default ResultList;

import Button from "@components/Layout/Button";
import Image from "@components/Layout/Image";
import { createRental } from "@services/api";
import { Room } from "@typeDefs/main";
import styled from "styled-components";

interface Props {
  room: Room;
  values: any;
}

const ResultListCard: React.FC<Props> = ({ room, values }: Props) => {
  const {
    name,
    thumbnailUrl,
    attendees,
    whiteboard,
    videoProjector,
    handicapAccess,
  } = room;

  const handleSubmit = async () => {
    console.log("Book", name, values);
    createRental(room, values);
  };

  return (
    <Container>
      <ThumbnailImage src={thumbnailUrl} alt={name} height={200} width={300} />
      <Content>
        <Title>
          {name}{" "}
          <span>{`pour ${attendees} personne${attendees > 1 ? "s" : ""}`}</span>
        </Title>
        <Description>{`Tableau blanc: ${
          whiteboard ? "Oui" : "Non"
        }`}</Description>
        <Description>{`Vidéo-projecteur: ${
          videoProjector ? "Oui" : "Non"
        }`}</Description>
        <Description>{`Accès handicapés: ${
          handicapAccess ? "Oui" : "Non"
        }`}</Description>

        <BookButton onClick={handleSubmit}>{"Réserver"}</BookButton>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;

  background-color: ${({ theme }) => theme.colors.layout.darker};
  width: 100%;
  max-width: 300px;
  margin-left: 10px;
`;

const ThumbnailImage = styled(Image)`
  border-radius: 10px 10px 0 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
`;

const Title = styled.h2`
  font-weight: ${({ theme }) => theme.weight.medium};
  margin-bottom: 10px;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.text.light};
`;

const BookButton = styled(Button)`
  margin-top: 10px;
`;

export default ResultListCard;

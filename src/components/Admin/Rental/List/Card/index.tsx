import Button from "@components/Layout/Button";
import Image from "@components/Layout/Image";
import { validateRental } from "@services/api";
import { Rental } from "@typeDefs/main";
import styled from "styled-components";

interface Props {
  rental: Rental;
  setRentals: React.Dispatch<React.SetStateAction<Rental[] | undefined>>;
}

const ResultListCard: React.FC<Props> = ({ rental, setRentals }: Props) => {
  const { firstName, lastName, email, phone, date, morning, afternoon, valid } =
    rental;
  const { name, thumbnailUrl, attendees } = rental.room;

  const handleSubmit = async () => {
    const r = await validateRental(rental);
    if (r) setRentals(r);
  };

  return (
    <Container>
      <ThumbnailImage src={thumbnailUrl} alt={name} height={200} width={300} />
      <Content>
        <Title>
          {name}{" "}
          <span>{`pour ${attendees} personne${attendees > 1 ? "s" : ""}`}</span>
        </Title>
        <Description>{`Prénom: ${
          firstName ? firstName : "Non renseigné"
        }`}</Description>
        <Description>{`Nom: ${
          lastName ? lastName : "Non renseigné"
        }`}</Description>
        <Description>{`Email: ${email ? email : "Non renseigné"}`}</Description>
        <Description>{`Téléphone: ${
          phone ? phone : "Non renseigné"
        }`}</Description>
        <Description>{`Date: ${
          date ? new Date(date).toLocaleDateString() : "Non renseigné"
        }`}</Description>
        <Description>{`Matin: ${morning ? "Oui" : "Non"}`}</Description>
        <Description>{`Après-midi: ${afternoon ? "Oui" : "Non"}`}</Description>
        {!valid && <BookButton onClick={handleSubmit}>{"Valider"}</BookButton>}
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

import styled from "styled-components";
import Button from "@components/Layout/Button";
import { Room } from "@typeDefs/main";

interface Props {
  rooms: Room[] | undefined;
  onChange: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  onSubmit: (event: React.FormEvent) => void;
  values: any;
}

const Search: React.FC<Props> = ({
  rooms,
  onChange,
  onSubmit,
  values,
}: Props) => {
  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <InputRow>
          <Input
            placeholder="Prénom"
            name={"firstName"}
            value={values?.firstName}
            onChange={onChange}
          />
          <Input
            placeholder="Nom"
            name={"lastName"}
            value={values?.lastName}
            onChange={onChange}
          />
        </InputRow>
        <InputRow>
          <Input
            placeholder="Adresse email"
            name={"email"}
            value={values?.email}
            onChange={onChange}
          />
          <Input
            placeholder="Numero de téléphone"
            name={"phone"}
            value={values?.phone}
            onChange={onChange}
          />
        </InputRow>
        <InputRow>
          <Input
            type="date"
            name={"date"}
            min={
              new Date(new Date().setDate(new Date().getDate() + 1))
                .toISOString()
                .split("T")[0]
            }
            onChange={onChange}
            value={values?.date}
          />
          <Input
            type="number"
            name={"attendees"}
            placeholder="Nombre de personnes"
            onChange={onChange}
            value={values?.attendees}
          />
        </InputRow>

        <InputRow>
          {/* checkbox to chose morning or afternoon */}
          <Checkbox>
            <CheckboxLabel>Matin</CheckboxLabel>
            <CheckboxInput
              type="checkbox"
              name={"morning"}
              onChange={onChange}
              checked={values?.morning}
            />
          </Checkbox>
          <Checkbox>
            <CheckboxLabel>Après midi</CheckboxLabel>
            <CheckboxInput
              type="checkbox"
              name={"afternoon"}
              onChange={onChange}
              checked={values?.afternoon}
            />
          </Checkbox>
        </InputRow>

        <InputRow>
          {/* checkbox to chose morning or afternoon */}
          <Checkbox>
            <CheckboxLabel>Vidéo-projecteur</CheckboxLabel>
            <CheckboxInput
              type="checkbox"
              name={"videoProjector"}
              onChange={onChange}
              checked={values?.videoProjector}
            />
          </Checkbox>
          <Checkbox>
            <CheckboxLabel>Tableau blanc</CheckboxLabel>
            <CheckboxInput
              type="checkbox"
              name={"whiteboard"}
              onChange={onChange}
              checked={values?.whiteboard}
            />
          </Checkbox>
          <Checkbox>
            <CheckboxLabel>Accès handicapé</CheckboxLabel>
            <CheckboxInput
              type="checkbox"
              name={"handicapAccess"}
              onChange={onChange}
              checked={values?.handicapAccess}
            />
          </Checkbox>
        </InputRow>

        <InputRow>
          {/* checkbox to chose morning or afternoon */}
          <Checkbox>
            <CheckboxLabel>Café</CheckboxLabel>
            <CheckboxInput
              type="checkbox"
              name={"coffee"}
              onChange={onChange}
              checked={values?.coffee}
            />
          </Checkbox>
          <Checkbox>
            <CheckboxLabel>Repas</CheckboxLabel>
            <CheckboxInput
              type="checkbox"
              name={"lunch"}
              onChange={onChange}
              checked={values?.lunch}
            />
          </Checkbox>
        </InputRow>

        <SubmitButton type={"submit"}>{"Rechercher"}</SubmitButton>
      </Form>
      {rooms && rooms.length == 0 && (
        <Disclaimer>
          {"Aucune salle n'est disponible, veuillez réessayer"}
        </Disclaimer>
      )}
    </Container>
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.layout.darker};
  margin-top: 10px;
  outline: none;
  padding: 8px 12px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.layout.darker};
  transition: all 0.2s ease-in-out;

  :focus {
    border: 1px solid ${({ theme }) => theme.colors.layout.dark};
  }
`;

const InputRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  ${Input} {
    flex: 1;
    margin-left: 10px;

    :first-child {
      margin-left: 0;
    }
  }
`;

const Checkbox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 10px;
`;

const CheckboxLabel = styled.label`
  font-size: ${({ theme }) => theme.size.small};
  font-weight: ${({ theme }) => theme.size.medium};
  margin-right: 5px;
`;

const CheckboxInput = styled.input`
  margin-right: 5px;
`;

const SubmitButton = styled(Button)`
  margin-top: 10px;
`;

const Disclaimer = styled.p`
  font-size: ${({ theme }) => theme.size.small};
  font-weight: ${({ theme }) => theme.size.medium};
  margin-top: 10px;
`;

export default Search;

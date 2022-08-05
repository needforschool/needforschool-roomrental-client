import Button from "@components/Layout/Button";
import { useForm } from "@hooks/useForm";
import styled from "styled-components";

const Home: React.FC = () => {
  const { onSubmit, onChange, values } = useForm(
    () => {
      console.log("Form submitted", values);
    },
    {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      morning: false,
      afternoon: false,
    }
  );

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Input
          placeholder="Prénom"
          name={"firstname"}
          value={values?.firstname}
          onChange={onChange}
        />
        <Input placeholder="Nom" name={"lastname"} value={values?.lastname} />
        <Input
          placeholder="Adresse email"
          name={"email"}
          value={values?.email}
        />
        <Input
          placeholder="Numero de téléphone"
          name={"phone"}
          value={values?.phone}
        />

        <div>
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
        </div>
        <Button type={"submit"}>{"Rechercher"}</Button>
      </Form>
      <Disclaimer>{"Aucune salle n'est disponible"}</Disclaimer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.layout.darker};
`;

const Checkbox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const CheckboxLabel = styled.label`
  font-size: ${({ theme }) => theme.size.small};
  font-weight: ${({ theme }) => theme.size.medium};
  margin-right: 5px;
`;

const CheckboxInput = styled.input`
  margin-right: 5px;
`;

const Disclaimer = styled.p`
  font-size: ${({ theme }) => theme.size.small};
  font-weight: ${({ theme }) => theme.size.medium};
  margin-top: 10px;
`;

export default Home;

import Button from "@components/Layout/Button";
import { useForm } from "@hooks/useForm";
import { getRooms } from "@services/api";
import { Room } from "@typeDefs/main";
import { NextPage } from "next";
import React from "react";
import styled from "styled-components";

const Rooms: NextPage = () => {
  const [rooms, setRooms] = React.useState<Room[] | undefined>(undefined);

  const initRooms = async () => {
    setRooms(await getRooms());
  };

  const handleSubmit = async () => {
    console.log(values);
  };

  React.useEffect(() => {
    initRooms();
  }, []);

  const { onSubmit, onChange, values } = useForm(handleSubmit, {
    name: "",
    thumbnailUrl: "",
    attendees: undefined,
    videoProjector: false,
    whiteboard: false,
    handicapAccess: false,
  });

  return (
    <Container>
      <h1>Rooms</h1>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Image</th>
            <th>Capacité</th>
            <th>Vidéo-projecteur</th>
            <th>Tableau blanc</th>
            <th>Accès handicapé</th>
          </tr>
        </thead>
        <tbody>
          {rooms && rooms.length > 0 ? (
            rooms.map((room) => (
              <tr key={room.id}>
                <td>{room.name}</td>
                <td>
                  <img src={room.thumbnailUrl} alt={room.name} width={200} />
                </td>
                <td>{room.attendees}</td>
                <td>{room.videoProjector ? "Oui" : "Non"}</td>
                <td>{room.whiteboard ? "Oui" : "Non"}</td>
                <td>{room.handicapAccess ? "Oui" : "Non"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6}>Aucune salle trouvée</td>
            </tr>
          )}
          <tr>
            <td>
              <input
                type={"text"}
                name={"name"}
                onChange={onChange}
                value={values?.name}
              />
            </td>
            <td>
              <input
                type={"text"}
                name={"thumbnailUrl"}
                onChange={onChange}
                value={values?.thumbnailUrl}
              />
            </td>
            <td>
              <input
                type={"number"}
                name={"attendees"}
                onChange={onChange}
                value={values?.attendees}
              />
            </td>
            <td>
              <input
                type={"checkbox"}
                name={"videoProjector"}
                onChange={onChange}
                value={values?.videoProjector}
              />
            </td>
            <td>
              <input
                type={"checkbox"}
                name={"whiteboard"}
                onChange={onChange}
                value={values?.whiteboard}
              />
            </td>
            <td>
              <input
                type={"checkbox"}
                name={"handicapAccess"}
                onChange={onChange}
                value={values?.handicapAccess}
              />
            </td>
          </tr>
          <tr>
            <td colSpan={6}>
              <Button onClick={onSubmit}>Ajouter</Button>
            </td>
          </tr>
        </tbody>
      </table>
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

  img {
    border-radius: 1rem;
  }

  table {
    tr {
      th {
        text-align: center;
        padding: 10px;
        min-width: 200px;
        vertical-align: middle;
      }

      td {
        text-align: center;
        padding: 10px;
        vertical-align: middle;
      }
    }

    ${Button} {
      margin: 0 auto;
    }
  }
`;

export default Rooms;

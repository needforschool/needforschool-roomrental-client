import Search from "@components/Home/Search";
import { Room } from "@typeDefs/index";
import React from "react";

const Home: React.FC = () => {
  const [rooms, setRooms] = React.useState<Room[] | undefined>(undefined);

  if (!rooms) return <Search rooms={rooms} setRooms={setRooms} />;
  return (
    <>
      {rooms.map((room, i) => {
        return <div key={i}>{room.name}</div>;
      })}
    </>
  );
};

export default Home;

import ResultList from "@components/Home/Result/List";
import Search from "@components/Home/Search";
import { useForm } from "@hooks/useForm";
import { searchRooms } from "@services/api";
import { Room } from "@typeDefs/main";
import { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  const [rooms, setRooms] = React.useState<Room[] | undefined>(undefined);

  const handleSubmit = async () => {
    const r = await searchRooms(values);
    setRooms(r);
  };

  const { onSubmit, onChange, values } = useForm(handleSubmit, {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    attendees: undefined,
    morning: false,
    afternoon: false,
    date: undefined,
    videoProjector: false,
    whiteboard: false,
    handicapAccess: false,
    coffee: false,
    lunch: false,
  });

  if (rooms && rooms.length > 0)
    return <ResultList rooms={rooms} values={values} setRooms={setRooms} />;
  return (
    <Search
      rooms={rooms}
      onSubmit={onSubmit}
      onChange={onChange}
      values={values}
    />
  );
};

export default Home;

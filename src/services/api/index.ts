import { Room } from "@typeDefs/index";
import axios from "axios";

export const endpoint = process.env.NEXT_PUBLIC_API_URL || "";

export const searchRooms = async (values: any): Promise<Room[] | undefined> => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "get",
    url: `${endpoint}/rooms/search`,
    params: {
      ...values,
    },
  };

  try {
    const req = await axios(config);
    return req.data;
  } catch (error) {
    console.error(error);
  }
};

export const createRental = async (room: Room, values: any): Promise<any> => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "post",
    url: `${endpoint}/rentals`,
    data: {
      room,
      ...values,
    },
  };

  try {
    const req = await axios(config);
    return req.data;
  } catch (error) {
    console.error(error);
  }
};

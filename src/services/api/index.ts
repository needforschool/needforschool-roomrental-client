import { Rental, Room } from "@typeDefs/main";
import axios from "axios";

export const endpoint = process.env.NEXT_PUBLIC_API_URL || "";

export const getRooms = async (): Promise<undefined | Room[]> => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "get",
    url: `${endpoint}/rooms`,
  };

  try {
    const req = await axios(config);
    return req.data;
  } catch (error) {
    console.error(error);
  }
};

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

export const createRental = async (
  room: Room,
  values: any
): Promise<undefined | Rental> => {
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

export const getRentals = async (): Promise<undefined | Rental[]> => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "get",
    url: `${endpoint}/rentals`,
  };

  try {
    const req = await axios(config);
    return req.data;
  } catch (error) {
    console.error(error);
  }
};

// update rental with valid to true
export const validateRental = async (
  rental: Rental
): Promise<undefined | Rental[]> => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "put",
    url: `${endpoint}/rentals/${rental.id}`,
    data: {
      ...rental,
      valid: true,
    },
  };

  try {
    const req = await axios(config);
    return req.data;
  } catch (error) {
    console.error(error);
  }
};

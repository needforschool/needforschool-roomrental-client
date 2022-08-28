export type Room = {
  id: string;
  name: string;
  thumbnailUrl: string;
  attendees: number;
  videoProjector: boolean;
  whiteboard: boolean;
  handicapAccess: boolean;
};

export type Rental = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  date: string;
  morning: boolean;
  afternoon: boolean;
  coffee: boolean;
  lunch: boolean;
  room: Room;
  valid: boolean;
};

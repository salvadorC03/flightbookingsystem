export type ContextValueObj = {
  initializing: boolean;
  isLoggedIn: boolean;
  login: (user: User) => void;
  logout: () => void;
  user: User | null;
};

export type User = {
  fullName: string;
  username: string;
  role: string;
  token: Token;
};

export type DisplayUser = {
  id: number;
  fullName: string;
  email: string;
  username: string;
  role: string;
}

export type Token = {
  value: string;
  expiresIn: string;
};

export type Customer = {
  idCardNumber: number;
  fullName: string;
  phoneNumber: string;
  birthDate: string;
};

export type Flight = {
  id: number;
  destination: string;
  passengers: number;
  departureDate: string;
  departureTime: string;
  returnDate: string;
  returnTime: string;
};

export type Passenger = {
  id: number;
  flight: Flight;
  customer: Customer;
};

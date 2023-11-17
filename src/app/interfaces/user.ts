import {UserDomicilio} from "./user-domicilio";

export interface User {
  id: number;
  name: string;
  email: string;
  fechaNacimiento: Date;
  edad: number;
  emailVerifiedAt: Date;
  createdAt: Date;
  updatedAt: Date;
  domicilio: UserDomicilio;
}

export class Customer {
  constructor(
    public name: string,
    public lastname: string,
    public email: string,
    public phone: string,
  ) {}
}

export interface ICustomer {
  _id: string;
  name: string;
  lastname: string;
  email: string;
  phone: string;
}

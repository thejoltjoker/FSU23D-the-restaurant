export class Customer {
  constructor(
    public name: string,
    public lastname: string,
    public email: string,
    public phone: string,
    public id?: string,
  ) {}
}

// export interface Customer {
//   id: string;
//   name: string;
//   lastname: string;
//   email: string;
//   phone: string;
// }

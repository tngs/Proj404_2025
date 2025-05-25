export default class RequestAdministrator {
  administratorName: string;
  email: string;
  password: string;

  constructor({
    administratorName,
    email,
    password,
  }: {
    administratorName: string;
    email: string;
    password: string;
  }) {
    this.administratorName = administratorName;
    this.email = email;
    this.password = password;
  }
}

// Create User Model Class
export class User {
  // properties
  public userId: number;
  public username: string = "";
  public password: string = "";
  public email: string = "";

  constructor(
    userId: number,
    username: string,
    password: string,
    email: string
  ) {
    this.userId = userId;
    this.username = username;
    this.password = password;
    this.email = email;
  }
}

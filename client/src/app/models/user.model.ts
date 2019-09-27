// Create User Model Class
export class User {
  // properties
  public userId: number;
  public username: string = "";
  public email: string = "";
  // Password for demo purposes only!
  public password: string = "";

  constructor(
    userId: number,
    username: string,
    email: string,
    password: string
  ) {
    this.userId = userId;
    this.username = username;
    this.email = email;
    this.password = password;
  }
}

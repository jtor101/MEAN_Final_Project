// Create User Model Class
export class Band {
  // properties
  public TEAMNAME: string;
  public MANAGERNAME: string;
  public MANAGERPHONE: string;

  constructor(teamname: string, managername: string, managerphone: string) {
    this.TEAMNAME = teamname;
    this.MANAGERNAME = managername;
    this.MANAGERPHONE = managerphone;
  }
}

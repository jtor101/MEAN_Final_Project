// Create User Model Class
export class League {
  // properties
  public NAME: string;
  public ID: number;
  public DESCRIPTION: string;

  constructor(name: string, id: number, description: string) {
    this.NAME = name;
    this.ID = id;
    this.DESCRIPTION = description;
  }
}

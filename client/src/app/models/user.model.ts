export class User {
    // properties
    public userId: number;
    public userName: string = '';
    public emailAddress: string = '';
    
    constructor(userId: number, userName: string, emailAddress: string) {
      this.userId = userId;
      this.userName = userName;
      this.emailAddress = emailAddress;
    }
  }
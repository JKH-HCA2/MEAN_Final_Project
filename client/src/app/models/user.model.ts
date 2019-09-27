export class User {
    // properties
    public userId: number;
    public userName: string = '';
    public emailAddress: string = '';
    public is_admin: number;
    // Password for demo purposes only!
    public password: string = '';
    
    constructor(userId: number, userName: string, emailAddress: string, password: string, is_admin: number) {
      this.userId = userId;
      this.userName = userName;
      this.emailAddress = emailAddress;
      this.password = password;
      this.is_admin = is_admin;
    }
  }
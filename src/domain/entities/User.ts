export class User {
  constructor(
    public readonly id: string,
    public name: string,
    public email: string
  ) {}

  changeEmail(newEmail: any) {
    if (!newEmail.includes('@')) throw new Error('Invalid email format');
    this.email = newEmail;
  }
}

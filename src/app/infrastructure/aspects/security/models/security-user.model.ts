export class SecurityUser {
  constructor(
    public readonly userName: string,
    public readonly isAuthenticated: boolean) {
  }

  public static createUnauthenticated(): SecurityUser {
    return new SecurityUser("Guest", false);
  }
}

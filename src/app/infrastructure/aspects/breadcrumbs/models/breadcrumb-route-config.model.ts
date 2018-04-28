export class BreadcrumbRouteConfig {
  private constructor(public label: string) { }

  public static create(label: string): BreadcrumbRouteConfig {
    return new BreadcrumbRouteConfig(label);
  }
}

export class LocaleStorageFacade {
  public static get<T>(key: string): T | null {
    return this.has(key) ? (JSON.parse(localStorage.getItem(key) as string) as T) : null;
  }

  public static set(key: string, value: unknown): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public static remove(key: string): void {
    localStorage.removeItem(key);
  }

  public static has(key: string): boolean {
    return key in localStorage;
  }
}

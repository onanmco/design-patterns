export abstract class FileSystemComponent {

  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public getName() {
    return this.name;
  }

  public abstract remove(): void;
}
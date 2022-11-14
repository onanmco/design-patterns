import { FileSystemComponent } from "./FileSystemComponent";

export class File extends FileSystemComponent {

  constructor(name: string) {
    super(name);
  }

  public remove(): void {
    console.log(`Removing file ${this.getName()}`);
  }
}
import { FileSystemComponent } from "./FileSystemComponent";

export class Folder extends FileSystemComponent {

  private children: FileSystemComponent[];

  constructor(name: string) {
    super(name);
    this.children = [];
  }

  public remove(): void {
    
    this.children.forEach(component => {
      component.remove();
    });

    this.children = [];
    console.log(`Removing folder ${this.getName()}`);
  }

  public add(component: FileSystemComponent) {
    this.children.push(component);
  }

  public getLength(): number {
    let length = this.children.length;

    this.children.forEach(child => {
      if (child instanceof Folder) {
        length += (child as Folder).getLength();
      }
    });

    return length;
  }
}
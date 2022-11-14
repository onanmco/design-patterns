import { IPostService } from "./IPostService";

export class RealPostService implements IPostService {
  
  public deletePost(id: number): void {
    console.log(`Post with ${id} has been deleted.`);
  }

}
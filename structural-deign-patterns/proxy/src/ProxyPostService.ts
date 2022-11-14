import { IPostService } from "./IPostService";

export class ProxyPostService implements IPostService {

  private realPostService: IPostService;

  constructor(realPostService: IPostService) {
    this.realPostService = realPostService;
  }
  
  public deletePost(id: number): void {
    if (!this.isUserAuthorized()) {
      throw new Error("Unauthorized");
    }
    this.realPostService.deletePost(id);
  }

  private isUserAuthorized(): boolean {
    return false;
  }

}
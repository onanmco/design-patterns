import { IPostService } from "./IPostService";
import { ProxyPostService } from "./ProxyPostService";
import { RealPostService } from "./RealPostService";

const realPostService: IPostService = new RealPostService();
const proxyPostService: IPostService = new ProxyPostService(realPostService);

realPostService.deletePost(1);
proxyPostService.deletePost(2);
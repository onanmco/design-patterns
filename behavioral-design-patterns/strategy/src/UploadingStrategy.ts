import Document from "./Document";

export default interface UploadingStrategy {

  upload(document: Document): void;
}
import Document from "./Document";
import UploadingStrategy from "./UploadingStrategy";

export default class MongoDbUploadingStrategy implements UploadingStrategy {

  upload(document: Document): void {
    console.log("Uploading the document to the MongoDb: ", document);
  }

}
import Document from "./Document";
import UploadingStrategy from "./UploadingStrategy";

export default class AmazonS3UploadingStrategy implements UploadingStrategy {

  upload(document: Document): void {
    console.log("Uploading the document to S3 cloud storage: ", document);
  }

}
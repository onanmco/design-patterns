import AmazonS3UploadingStrategy from "./AmazonS3UploadingStrategy";
import Document from "./Document";
import MongoDbUploadingStrategy from "./MongoDbUploadingStrategy";
import Uploader from "./Uploader";

const documents: Document[] = [
  {
    sizeInMegabytes: 10,
    content: {
      name: "small-document",
      description: "This is a small document and its expected to be uploaded to mongo db"
    }
  },
  {
    sizeInMegabytes: 20,
    content: {
      name: "large-document",
      description: "This is a large document and its expected to be uploaded Amazon s3"
    }
  }
];

const mongoStrategy = new MongoDbUploadingStrategy();
const s3Strategy = new AmazonS3UploadingStrategy();

const uploader = new Uploader(mongoStrategy);

documents.forEach(document => {
  if (document.sizeInMegabytes <= 16) {
    uploader.setStrategy(mongoStrategy);
    uploader.upload(document);
  } else {
    uploader.setStrategy(s3Strategy);
    uploader.upload(document);
  }
});
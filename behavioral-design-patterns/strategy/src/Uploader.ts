import Document from "./Document";
import UploadingStrategy from "./UploadingStrategy";

export default class Uploader {

  private strategy: UploadingStrategy;

  constructor(strategy: UploadingStrategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: UploadingStrategy) {
    this.strategy = strategy;
  }

  public upload(document: Document) {
    this.strategy.upload(document);
  }
}
import IDbProduct from "./IDbProduct";

export default class MONGODBProduct implements IDbProduct {
  getProductById(productId: string): string {
    return `\nMongoDB: Exibindo os dado do produto ${productId}`;
  }
}

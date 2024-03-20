import IDbProduct from "./IDbProduct";

export default class MySQLProduct implements IDbProduct {
    
    getProductById(productId: string): string {
    return `\nMySQL: Exibindo dados do produto: ${productId}`;
  }
}

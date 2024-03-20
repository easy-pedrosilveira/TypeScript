import Db from "../model/Db";
import IDbProduct from "../model/IDbProduct";
import MONGODBProduct from "../model/MongoDbProduct";
import MySQLProduct from "../model/MySQLProduct";

export default class DbProductFactory {
  public static create(type: Db.MYSQL): IDbProduct {
    if (type === Db.MYSQL) return new MySQLProduct();
    if (type === Db.MONGODB) return new MONGODBProduct();
  }
}

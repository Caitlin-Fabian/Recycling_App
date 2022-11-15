import { BSON } from "realm";

export class User {
  constructor({ _id = new BSON.ObjectId(), owner_id }) {
    this._id = _id;
    this.owner_id = owner_id;
  }

  static schema = {
    name: "User",
    primaryKey: "_id",
    properties: {
      _id: "string",
      username: "string",
      status: "string",
      owner_id: "string",
    },
  };
}

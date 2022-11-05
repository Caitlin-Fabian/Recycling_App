import { BSON } from "realm";

export class Recycled {
  constructor({ _id = new BSON.ObjectId(), owner_id }) {
    this._id = _id;
    this.owner_id = owner_id;
  }

  static schema = {
    name: "Recycled",
    properties: {
      _id: "objectId",
      type: "string",
      owner_id: "string",
    },
    primaryKey: "_id",
  };
}

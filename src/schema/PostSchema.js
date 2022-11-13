import { BSON } from "realm";

export class Post {
  constructor({ _id = new BSON.ObjectId(), owner_id }) {
    this._id = _id;
    this.owner_id = owner_id;
  }

  static schema = {
    name: "Post",
    properties: {
      _id: "objectId",
      description: "string",
      owner_id: "string",
      date_published: "date",
      image: "string",
      username: "string",
      location: "string",
    },
    primaryKey: "_id",
  };
}

import { createRealmContext } from "@realm/react";
import { Recycled } from "./schema/RecycledSchema";
import { Item } from "./schema/ItemSchema";
import { User } from "./schema/UserSchema";

export default createRealmContext({
  schema: [Item.schema, Recycled.schema, User.schema],
});

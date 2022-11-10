import { createRealmContext } from "@realm/react";
import { Recycled } from "./schema/RecycledSchema";
import { Item } from "./schema/ItemSchema";

export default createRealmContext({
	schema: [Item.schema, Recycled.schema],
});

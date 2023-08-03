import ORM from "@webresto/core/interfaces/ORM";
import ORMModel from "@webresto/core/interfaces/ORMModel";
import {RequiredField} from "@webresto/core/interfaces/toolsTS";

import slugify from "slugify"; // present in core
import { v4 as uuid } from "uuid";

let attributes = {
  id: "string",
  title: "string",
  slug: "string",
  amount: "number" as unknown as number,
};

type attributes = typeof attributes;
interface Example extends RequiredField<Partial<attributes>, "id">, ORM {}
export default Example;

let Model = {
  async beforeCreate(init: Example, proceed: any) {
    if (!init.id) {
      init.id = uuid();
    }

    if (!init.slug) {
      init.slug = await getSlug(slugify(init.title));
    }

    // icrease 1 if slug present
    async function getSlug(slug: string) {
      let count = await Example.count({ slug: {"contains": slug } })
      if (count) {
        return slug = slug + "-" +count;
      } else {
        return slug;
      }
    }
    
    return proceed();
  },
};

module.exports = {
  primaryKey: "id",
  attributes: attributes,
  ...Model,
};

declare global {
  const Example: typeof Model & ORMModel<Example>;
}

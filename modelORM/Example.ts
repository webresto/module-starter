import ORM from "@webresto/core/interfaces/ORM";
import ORMModel from "@webresto/core/interfaces/ORMModel";
import slugify from "slugify"; // present in core
import { v4 as uuid } from "uuid";

let attributes = {
  title: "string",
  slug: "string",
  amount: "number" as unknown as number,
};

type attributes = typeof attributes;
interface Example extends attributes, ORM {}
export default Example;

let Model = {
  async beforeCreate(init: any, proceed: any) {
    if (!init.id) {
      init.id = uuid();
    }

    if (!init.slug) {
      init.slug = slugify(init.name);
    }

    // icrease 1 if slug present
    async function getSlug(slug: string, salt?: number) {
      let _slug = slug;
      if (salt) _slug = slug + "-" + salt;

      if (await Example.findOne({ slug: _slug })) {
        getSlug(slug, salt + 1);
      } else {
        return slug + salt;
      }
    }

    await getSlug(init.slug);
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

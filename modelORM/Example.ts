import ORM from "@webresto/core/modelsHelp/ORM";
import ORMModel from "@webresto/core/modelsHelp/ORMModel";

let attributes = {
  /** Id */
  id: {
    type: "number",
    autoIncrement: true,
  } as unknown as string,
  
  /** Name */
  name: {
    type: "string",
    unique: true,
    required: true
  } as unknown as string,
  
  /** Description */
  description: "string" as string
}

type Example = typeof attributes & ORM
export default Example

let Model  =  {
  /** Example menhod1 */
  async method1(attr: string): Promise<Example> {
    return await Example.findOne();
  }
}

module.exports = {
  primaryKey: "id",
  attributes: attributes,
  ...Model
}

declare global {
  const Example: typeof Model & ORMModel<Example>;
}
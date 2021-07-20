import * as sails from "typed-sails";
import { HookTools } from "@webresto/core";
import { resolve } from "path";

export default async function (sails: sails.default.Sails, cb) {
  // Make your code here ...

  console.log("webresto-module-starter was loaded 🚀");
  // await HookTools.default.bindModels(resolve(__dirname, "../../modelORM"));
  cb();
}

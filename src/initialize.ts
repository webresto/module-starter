import * as sails from "@42pub/typed-sails";

// @ts-ignore
import HookTools from "@webresto/core/libs/hookTools";
import { resolve } from "path";

import { setWhiteList } from "@webresto/graphql/lib/graphqlHelper"

import afterHook from "./hook/afterHook";

const requiredHooks = [
  'adminpanel',
  'restocore'
];

export default async function (sails: sails.default.Sails, cb) {
  // Make your code here ...

  console.log("webresto-module-starter just loaded 🚀");


  // Example GRAPHQL
  setWhiteList({
    your_model_name: ['query', 'subscription']
  })
  
  await HookTools.bindModels(resolve(__dirname, "../models"));
  HookTools.waitForHooks('webresto-module-starter', requiredHooks, afterHook); 
  cb();
}

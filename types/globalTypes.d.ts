import sails from "@42pub/typed-sails";
import AwaitEmitter from "@webresto/core/libs/AwaitEmitter";
type sailsConfig = typeof sails.config;
import { NotificationManager } from "@webresto/core/libs/NotificationManager"
import ModuleConfig from "./ModuleConfig";
import ModuleHook from "./ModuleHook";

interface SailsHooks {
  'webresto-module-starter': ModuleHook;
  [key:string]: any | object | Function;
}

declare global {
  const emitter: AwaitEmitter;
  const NotificationManager: NotificationManager
  interface Sails extends sails.Sails {
    on: any;
    emit: any;
    router: any;
    hooks: SailsHooks;
    models: any;
    config: _sailsConfig;
    log: any;
    after: any;
  }
  interface _sailsConfig extends sailsConfig {
    'webresto-module-starter': ModuleConfig;
    [key:string]: any | object;
  }
  const sails: Sails;
  type ReqType = sails.Request;
  type ResType = sails.Response;
  type PropType<TObj, TProp extends keyof TObj> = TObj[TProp];
}

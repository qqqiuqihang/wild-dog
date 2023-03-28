import { WdCookie, WdStorageLocal, WdStorageSession } from "../plugins/index";

console.log("storage", WdCookie, WdStorageLocal, WdStorageSession);

export default [WdCookie, WdStorageLocal, WdStorageSession];

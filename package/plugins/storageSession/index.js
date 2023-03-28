import { withInstallFunction } from "../../utils";

import storageSession from "./src/storageSession.js";

export const WdStorageSession = withInstallFunction(storageSession, "$storageSession");
export default WdStorageSession;

export * from "./src/storageSession";

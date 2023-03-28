import { withInstallFunction } from "../../utils";

import storageLocal from "./src/storageLocal.js";

export const WdStorageLocal = withInstallFunction(storageLocal, "$storageLocal");
export default WdStorageLocal;

export * from "./src/storageLocal";

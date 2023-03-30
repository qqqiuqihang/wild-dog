import { withInstallFunction } from "../../utils";

import generateUUID from "./src/generateUUID.js";

export const WdGenerateUUID = withInstallFunction(generateUUID, "$generateUUID");
export default WdGenerateUUID;

export * from "./src/generateUUID";

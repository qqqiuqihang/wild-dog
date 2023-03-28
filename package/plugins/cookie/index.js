import { withInstallFunction } from "../../utils";

import cookie from "./src/cookie.js";

export const WdCookie = withInstallFunction(cookie, "$cookie");
export default WdCookie;

export * from "./src/cookie";

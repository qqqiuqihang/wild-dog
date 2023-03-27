// import { provideGlobalConfig } from "@WildDog/hooks";
import { INSTALLED_KEY } from "@WildDog/constants";
import { version } from "./version";

export const makeInstaller = (components) => {
  // eslint-disable-next-line no-unused-vars
  const install = (app, options) => {
    if (app[INSTALLED_KEY]) return;

    app[INSTALLED_KEY] = true;
    components.forEach((c) => app.use(c));

    // if (options) provideGlobalConfig(options, app, true);
  };

  return {
    version,
    install,
  };
};

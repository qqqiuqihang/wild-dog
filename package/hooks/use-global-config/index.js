import { computed, getCurrentInstance, inject, provide, ref, unref } from "vue";
import { configProviderContextKey } from "@element-plus/tokens";
// import { debugWarn, keysOf } from "@element-plus/utils";

// this is meant to fix global methods like `ElMessage(opts)`, this way we can inject current locale
// into the component as default injection value.
// refer to: https://github.com/element-plus/element-plus/issues/2610#issuecomment-887965266
const globalConfig = ref();

export function useGlobalConfig(key, defaultValue = undefined) {
  const config = getCurrentInstance() ? inject(configProviderContextKey, globalConfig) : globalConfig;
  if (key) {
    return computed(() => config.value?.[key] ?? defaultValue);
  } else {
    return config;
  }
}

export const provideGlobalConfig = (config, app, global = false) => {
  const inSetup = !!getCurrentInstance();
  const oldConfig = inSetup ? useGlobalConfig() : undefined;

  const provideFn = app?.provide ?? (inSetup ? provide : undefined);
  if (!provideFn) {
    // debugWarn("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }

  const context = computed(() => {
    const cfg = unref(config);
    if (!oldConfig?.value) return cfg;
    return mergeConfig(oldConfig.value, cfg);
  });
  provideFn(configProviderContextKey, context);
  if (global || !globalConfig.value) {
    globalConfig.value = context.value;
  }
  return context;
};

const mergeConfig = (a, b) => {
  // const keys = [...new Set([...keysOf(a), ...keysOf(b)])];
  const keys = [...new Set([])];
  const obj = {};
  for (const key of keys) {
    obj[key] = b[key] ?? a[key];
  }
  return obj;
};

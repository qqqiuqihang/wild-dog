/**
 * sessionStorage
 * @author qqh 2023-03-28
 * @version 1.0.0
 */
export const storageSession = {
  setItem(key, value) {
    if (!key || !value) return false;
    return window.sessionStorage.setItem(key, JSON.stringify(value));
  },
  getItem(key) {
    if (!key) return false;
    return JSON.parse(window.sessionStorage.getItem(key) || null);
  },
  removeItem(key) {
    if (!key) return false;
    return window.sessionStorage.removeItem(key);
  },
  clear() {
    return window.sessionStorage.clear();
  },
};

export default storageSession;

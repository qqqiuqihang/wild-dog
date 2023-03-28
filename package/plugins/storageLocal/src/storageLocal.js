/**
 * localStorage
 * @author qqh 2023-03-28
 * @version 1.0.0
 */
export const storageLocal = {
  /**
   * 永久存储信息到浏览器，手动触发删除
   * @param {string} key 存储的key，可用来获取存储的值
   * @param {*} value 需要存储的值
   * @returns 布尔值获取默认值
   */
  setItem(key, value) {
    if (!key || !value) return false;
    return window.localStorage.setItem(key, JSON.stringify(value));
  },
  /**
   * 获取永久存储的值
   * @param {string} key
   * @returns {boolean} 未设置key或未获取到则返回false，正常返回获取到的值
   */
  getItem(key) {
    if (!key) return false;
    return JSON.parse(window.localStorage.getItem(key) || false);
  },
  /**
   * 根据key清除设置的存储信息
   * @param {string} key
   */
  removeItem(key) {
    if (!key) return false;
    return window.localStorage.removeItem(key);
  },
  /**
   * 清除全部设置的存储信息
   * @param {string} key
   */
  clear() {
    return window.localStorage.clear();
  },
};
export default storageLocal;

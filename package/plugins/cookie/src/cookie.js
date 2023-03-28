/**
 * Cookie
 * @author qqh 2023-03-28
 * @version 1.0.0
 */
export const cookie = {
  /**
   * 设置cookie
   * @param {*} key 存储信息的key
   * @param {*} value 存储信息的value
   * @param {*} expiresDay 存储信息的有效期
   * @returns
   */
  setCookie(key, value, expiresDay) {
    if (!key || !value || !expiresDay) return false;
    const oDay = new Date();
    oDay.setDate(oDay.getDate() + expiresDay);
    document.cookie = key + " = " + value + "; expires = " + expiresDay;
    return true;
  },
  /**
   * 获取Cookie
   * @param {*} key 获取Cookie的key
   * @returns
   */
  getCookie(key) {
    if (!key) return false;
    var arr = document.cookie.split("; "); //cookie间是用;+空格隔开的
    for (let i = 0; i < arr.length; i++) {
      var arr2 = arr[i].split("=");
      if (arr2[0] == key) {
        return arr2[1];
      }
    }
    return false;
  },
  /**
   * 清除Cookie
   * @param {*} key 根据key清除Cookie
   * @returns
   */
  removeCookie(key) {
    return this.setCookie(key, 1, -1); //-1天后过期，则浏览器立马删除
  },
};

export default cookie;

# WdCookie

::: tip
这是一个存储在浏览器缓存里的方法，设置过期时间可自动清除

未传入信息，默认返回 false
:::

通过以下方式导入

```javascript
import { WdCookie } from "WildDog";
```

## setCookie

WdCookie.setCookie(key, value, expiresDay)

| 参数       | 说明                                   | 类型      | 可选值 | 默认值 |
| ---------- | -------------------------------------- | --------- | ------ | ------ |
| key        | 用来保存信息的唯一值，也用来获取对应值 | string    | -      | -      |
| value      | 需要保存的信息                         | any       | -      | -      |
| expiresDay | 存储信息的有效期                       | timestamp | -      | -      |

## getCookie

WdCookie.getCookie(key)

| 参数 | 说明              | 类型   | 可选值 | 默认值 |
| ---- | ----------------- | ------ | ------ | ------ |
| key  | 获取对应 key 的值 | string | -      | -      |

## removeCookie

WdCookie.removeCookie(key)

| 参数 | 说明              | 类型   | 可选值 | 默认值 |
| ---- | ----------------- | ------ | ------ | ------ |
| key  | 移除对应 key 的值 | string | -      | -      |

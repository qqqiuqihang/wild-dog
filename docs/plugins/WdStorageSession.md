# WdStorageSession

::: tip
这是一个存储在浏览器缓存里的方法，临时存储在浏览器中，关闭浏览器可清除

未传入信息，默认返回 false
:::

通过以下方式导入

```javascript
import { WdStorageSession } from "WildDog";
```

## setItem

WdStorageSession.setItem(key, value)

| 参数  | 说明                                   | 类型   | 可选值 | 默认值 |
| ----- | -------------------------------------- | ------ | ------ | ------ |
| key   | 用来保存信息的唯一值，也用来获取对应值 | string | -      | -      |
| value | 需要保存的信息                         | any    | -      | -      |

## getItem

WdStorageSession.setItem(key)

| 参数 | 说明              | 类型   | 可选值 | 默认值 |
| ---- | ----------------- | ------ | ------ | ------ |
| key  | 获取对应 key 的值 | string | -      | -      |

## removeItem

WdStorageSession.setItem(key)

| 参数 | 说明              | 类型   | 可选值 | 默认值 |
| ---- | ----------------- | ------ | ------ | ------ |
| key  | 移除对应 key 的值 | string | -      | -      |

## clear

WdStorageSession.setItem( )

清除所有本地 localStorage 缓存

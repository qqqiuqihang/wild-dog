# WdStorageLocal

::: tip
这是一个存储在浏览器缓存里的方法，可以永久存储在浏览器中，手动清除

未传入信息，默认返回 false
:::

通过以下方式导入

```javascript
import { WdStorageLocal } from "WildDog";
```

## setItem

WdStorageLocal.setItem(key, value)

| 参数  | 说明                                   | 类型   | 可选值 | 默认值 |
| ----- | -------------------------------------- | ------ | ------ | ------ |
| key   | 用来保存信息的唯一值，也用来获取对应值 | string | -      | -      |
| value | 需要保存的信息                         | any    | -      | -      |

## getItem

WdStorageLocal.setItem(key)

| 参数 | 说明              | 类型   | 可选值 | 默认值 |
| ---- | ----------------- | ------ | ------ | ------ |
| key  | 获取对应 key 的值 | string | -      | -      |

## removeItem

WdStorageLocal.setItem(key)

| 参数 | 说明              | 类型   | 可选值 | 默认值 |
| ---- | ----------------- | ------ | ------ | ------ |
| key  | 移除对应 key 的值 | string | -      | -      |

## clear

WdStorageLocal.setItem( )

清除所有本地 localStorage 缓存

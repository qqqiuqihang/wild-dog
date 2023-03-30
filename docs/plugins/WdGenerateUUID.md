# WdGenerateUUID

::: tip
生成 uuid 的方法

返回值为生成的 uuid
:::

通过以下方式导入

```javascript
import { WdGenerateUUID } from "WildDog";
```

## guid

默认生成 xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx 格式的 guid

```javascript
WdGenerateUUID.guid();
```

## guid2

默认生成 xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx 格式的 guid

```javascript
WdGenerateUUID.guid2();
```

## uuid

默认生成 0123456789abcdef 之间的36位uuid

```javascript
WdGenerateUUID.uuid();
```

## uuid2

默认生成 xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx uuid

```javascript
WdGenerateUUID.uuid2(len, chars);
```

| 参数  | 说明             | 类型   | 可选值 | 默认值                                                         |
| ----- | ---------------- | ------ | ------ | -------------------------------------------------------------- |
| len   | 生成的 uuid 长度 | number | -      | 36                                                             |
| chars | uuid 的取值范围  | string | -      | 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz |

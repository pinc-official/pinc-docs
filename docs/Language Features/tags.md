---
id: tags
title: 'Tags'
sidebar_position: 3
---

# Tags

## Primitive Tags

The following tags are supported by pinc-lang and can be used to recieve data from outside of the component / page.

### String

```pi
let text = #String();
```

**Optional attributes:**

- `key`: `string`
- `label`: `string`
- `initialValue`: `string`
- `rows`: `int` (default `1`)
- `richtext`: `bool` (default `false`)

**Returns:**

```
string
```

### Int

```pi
let amount = #Int();
```

**Optional attributes:**

- `key`: `string`
- `label`: `string`
- `initialValue`: `int`
- `min`: `int`
- `max`: `int`
- `step`: `int`

**Returns:**

```
int
```

### Float

```pi
let price = #Float();
```

**Optional attributes:**

- `key`: `string`
- `label`: `string`
- `initialValue`: `float`
- `min`: `float`
- `max`: `float`
- `step`: `float`

**Returns:**

```
float
```

### Boolean

```pi
let checked = #Boolean();
```

**Optional attributes:**

- `key`: `string`
- `label`: `string`
- `initialValue`: `bool`

**Returns:**

```
bool
```

### Array

```pi
let items = #Array(of: #String);
```

**Returns:**

```
array<any>
```

**Required attributes:**

- `of`: `tag`

**Optional attributes:**

- `key`: `string`
- `label`: `string`
- `initialSize`: `int`
- `min`: `int`
- `max`: `int`

### Record

```pi
let seo = #Record(of: {
  title: #String,
  description: #String(rows: 2),
});
```

**Returns:**

```
record<any>
```

**Required attributes:**

- `of`: `record`

**Optional attributes:**

- `key`: `string`
- `label`: `string`

### Slot

```pi
let footerContent = #Slot(key: "footer");
```

**Required attributes:**

- `key`: `string`

**Optional attributes:**

- `key`: `string`
- `label`: `string`
- `min`: `int`
- `max`: `int`
- `constraints`: `array<component constraints>`

**Returns:**

```
array<Components>
```

---

## Compiler Tags

The following tags are used to talk to the compiler to privide some functionality:

### SetContext

Set a context value, which will be available to all components rendered as children of the current page / component.

```pi
let theme = #SetContext(key: "theme", value: theme);
```

**Required attributes:**

- `key`: `string`
- `value`: `any`

### GetContext

Revieve a value of a previously set context.

```pi
let theme = #GetContext(key: "theme");
```

**Required attributes:**

- `key`: `string`

**Returns:**

```
any
```

### CreatePortal

Create a portal, where any other component or page can put values into.

```pi
let stylesheets = #CreatePortal(key: "stylesheets");
```

**Returns:**

```
array<any>
```

### Portal

Push values into a portal. If no such portal exists, the push will be ignored.

```pi
#Portal(key: "stylesheets", push: <link rel="stylesheet" href="/css/Button.css" />);
```

**Required attributes:**

- `key`: `string`
- `push`: `any` (except functions)

---

## CMS Tags

The following Tags are provided by the cms and are used to get some cms specific data into the components:

### Selection

```pi
let theme = #Selection(key: "theme", options: [
  { label: "Blue", value: "blue" },
  { label: "Red", value: "red" },
]);
```

**Required attributes:**

- `options`: `array<{ label: string, value: string }>`

**Optional attributes:**

- `key`: `string`
- `label`: `string`
- `initialValue`: `string`

**Returns:**

```
string
```

### MultiSelection

```pi
let fruits = #MultiSelection(key: "fruits", options: [
  { label: "Apple", value: "apple" },
  { label: "Orange", value: "orange" },
  { label: "Banana", value: "banana" },
  { label: "Melon", value: "melon" },
]);
```

**Required attributes:**

- `options`: `array<{ label: string, value: string }>`

**Optional attributes:**

- `key`: `string`
- `label`: `string`
- `initialValue`: `string`

**Returns:**

```
array<string>
```

### Image

```pi
let teaser = #Image(key: "teaser");
```

**Optional attributes:**

- `key`: `string`
- `label`: `string`

**Returns:**

```
{
  src: string
  alt: string
  caption: string
  width: int
  height: int
}
```

### Link

```pi
let url = #Link(key: "url");
```

**Optional attributes:**

- `key`: `string`
- `label`: `string`

**Returns:**

```
string
```

### Tree

```pi
let mainNavigation = #Tree(key: "mainNavigation");
```

**Optional attributes:**

- `key`: `string`
- `label`: `string`
- `maxLevels`: `int`
- `filter`: `array<page constraints>`

**Returns:**

```
{
  type: string,
  url: string,
  active: bool,
  inPath: bool,
  children: array<this>,
  instance: record
}
```

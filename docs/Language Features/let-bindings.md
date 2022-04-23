---
id: let-bindings
title: "Let Bindings"
sidebar_position: 1
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Let Bindings

`let` binds values to names. You might know them under the name "variable declarations".
Let bindings are by defualt immutable, which means, that they can't be changed after they have been declared.

```
let greeting = "hello!";
let amount = 10;
let newAmount = 10 + amount;
```

## Shadowing

Even though let bindings cannot change their value, they may be "modified" in another way: by "shadowing" them.

Let's assume you have a declaration named `result`. If you now want to change the value of result, you may do the follwoing:

```
let result = 1;
let result = result + 5;

// result is now 6
```

By shadowing a variable, you are essentially redeclaring the variable with the same name.


## Blocks and Scope

Bindings are always scoped within their surrounding block (`{}`).
For example:

```
if (something == true) {
    let result = 1;
}

// result is not accessible here
```

Another feature of blocks is, that they implicitly return their last value.
So you are able to declare new bindings in the following way:

```
let result = {
    let part1 = 10;
    let part2 = 20;

    part1 + part2
};

// result is now 30
// part1 and part2 are not accessible here...
```


## Mutating Let Bindings

Even though let bindings are immutable by default, in some rare cases, you might need them to be mutable.
When thats the case, you may declare them as mutable declarations:

```
let mutable is_first = true;

for (i in 0..10) {
    if (i != 0) {
        is_first := false;
    }

    // ...
}

// is_first is now false
```

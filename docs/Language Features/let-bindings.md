---
id: let-bindings
title: "Let Bindings"
sidebar_position: 1
---

# Let Bindings

`let` binds values to names. You might know them under the name "variable declarations". <br /> Let bindings are
immutable by defualt, which means, that they can't be changed after they have been declared.

```
let greeting = "hello!";
let amount = 10;
let newAmount = 10 + amount;
```

## Optional values

pinc fails compiling, when you try to add a `null` value to a let binding, which is not marked as nullable. <br /> To
mark a declaration as nullable, you have to end its name with a `?`.

For example:

```
let result = 10;
let maybe_something? = if (result > 20) "Some value!";
```

The variable `maybe_something` has to be marked as nullable here, because we are only assigning a value to it, if the
`result` is greater than 20.

## Shadowing

Even though let bindings cannot change their value, they may be "modified" in another way: by "shadowing" them.

Let's assume you have a declaration named `result`. <br /> If you want to change the value of result, you may do the
following:

```
let result = 1;
let result = result + 5;

// result is now 6
```

By shadowing a variable, you are essentially redeclaring the variable with the same name. <br /> You are however not
changing the value of the first declaration.

```
let amount = 1;
let add_amount = fn (num) -> {
    amount + num
};

let amount = 5;
let result = add_amount(2);
```

`result` will be 3, as the `add_amount` function still only knows about the first declaration.

## Blocks and Scope

Bindings are always scoped within their surrounding block (`{}`). <br /> For example:

```
if (something == true) {
    let result = 1;
}

// result is not accessible here
```

Another feature of blocks is, that they implicitly return their last value. <br /> So you are able to declare new
bindings in the following way:

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

Even though let bindings are immutable by default, in some rare cases, you might need them to be mutable. <br /> When
thats the case, you may mark them as mutable declarations with the `mutable` keyword.

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

:::caution

In pinc you are able to express a lot of things witout the need for mutation! <br /> We do recommend to only use mutable
values when you really need them. <br /> Having a lot of mutable values may slow down the compiler, resulting in slower
response times of your website.

:::

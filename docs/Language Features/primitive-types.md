---
id: primitive-types
title: "Primitive Types"
sidebar_position: 2
---

# Primitive Types

## String

In pinc strings are always written with double quotes (single quotes are reserved for the `char` type).

```pi
let greeting = "Hello world!"
let multilineGreeting = "Hello
 world!"
```

To concatenate strings, use `++`:

```pi
let greetings = "Hello " ++ "world!";
```

String templates are written with double quotes just like normal strings. Their placeholder values are written inside
`$()` and may only contain variables.

```pi
let name = "Joe";
let greeting = "Hello $(name)";
```

:::info

String templates may only accept variables as their placeholders. Advanced expressions (like an if condition) are
currently not allowed.

**The following code would lead to an error:**

```pi
let greeting = "Hello $(if (name) name else "World")";
```

... but it can always be written with a let binding:

```pi
let subject = if (name) name else "World";
let greeting = "Hello $(subject)";
```

:::

## Char

pinc has a type for a string with a single letter:

```
let firstLetterOfAlphabet = 'a';
```

To convert a string to a char, use `"a"[0]`.

To convert a char to a string, use `"" ++ 'a'`.

## Boolean

A pinc boolean can be either `true` or `false`.

```pi
let yes = true;
let no = false;
```

All common operations are available:

- logical and `&&`
- logical or `||`
- logical not `!`
- `<=`, `>=`, `<`, `>`
- `==`: structural equal, compares data structures deeply
- `!=`: structural unequal

## Int

Integers are numbers without a decimal point.

```pi
let number = 5;
let largeNumber = 1_000_000;

let result = number + largeNumber; // 1_000_005
```

We provide the usual operations on them:

- addition: `+`
- substraction: `-`
- multplication: `*`
- division: `/`
- modulo: `%`
- exponentiation: `**`

To improve readability, you may place underscores in the middle of numeric literals such as `1_000_000`. Note that
underscores can be placed anywhere within a number, not just every three digits.

## Float

Floats are numbers with a decimal point. They can be written in the following ways:

```pi
let f = 1_000.462;
let f = 1.;
let f = 1.4332;
let f = .5;
let f = 1e10;
let f = 1e+2;
let f = 1e-5;
let f = 1.e-2;
let f = 0.1e-1;
```

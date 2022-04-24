---
slug: /
title: "Introduction"
sidebar_position: 1
---

# Introduction

Pinc is a template language, which inverses the flow of your data.
In priniple it is possible to write CMS, which do not need any kind of configuration files anymore.

## Your first Component

To create your first component, you first have to create a file with the `.pi` extention.
Pinc files neither need to be in a specific folder structure, nor specify how many components you declare inside of them. In theory, you could write your whole application inside of a single file.

Lets create a button as our first component:

```
component Button {
    <button class="Button">
        <span class="Button-icon Button-icon--arrowRight">
        <span class="Button-text">Click me!</span>
    </button>
}
```

As you can see, every component needs to start with the `component` keyword, and has to be given an uppercase identifier as a name (in our case `Button`).

The body of your component contains the logic needed to render your template. In our Button component, the template is completely static and cannot be passed any options to change its behaviour.

Let's change that:

```
component Button {
    let text = #String;
    let icon = #String;

    <button class="Button">
        <span class="Button-icon Button-icon--{| icon |}">
        <span class="Button-text">{text}</span>
    </button>
}
```

We now added two variables to our Button component: `text` and `icon`.
Both have a so called `Tag` assigned as their value, more specifically a String-Tag.

Tags are the way for you to say "I want to get some value of a specific type". Read more about tags [here](#tags).

....